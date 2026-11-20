import { describe, expect, it } from 'vitest';
import { buildChapterGraph, buildLessonGraph } from '../../src/core/learning/graph';
import { courseRegistry } from '../../src/infrastructure/content/catalogue';
import { learningContent } from '../../src/infrastructure/content/learning';

describe('learning prerequisite graph layout', () => {
  it('builds inter-chapter topological tiers for General Chemistry', () => {
    const course = courseRegistry.get('general-chemistry');
    expect(course).toBeDefined();
    const graph = buildChapterGraph(course!, learningContent);

    expect(graph.nodes).toHaveLength(7);
    expect(graph.edges.length).toBeGreaterThanOrEqual(3);

    const byId = new Map(graph.nodes.map(n => [n.chapter.id, n]));
    // Ch 1 -> Ch 2, Ch 3 -> Ch 4 -> Ch 6
    expect(byId.get('gc-ch-1')?.tier).toBe(0);
    expect(byId.get('gc-ch-2')?.tier).toBe(1);
    expect(byId.get('gc-ch-3')?.tier).toBe(0);
    expect(byId.get('gc-ch-4')?.tier).toBe(1);
    expect(byId.get('gc-ch-6')?.tier).toBe(2);
    expect(byId.get('gc-ch-4')?.directPrereqChapterIds).toContain('gc-ch-3');
    expect(byId.get('gc-ch-4')?.directNextChapterIds).toContain('gc-ch-6');
  });

  it('builds lesson DAG with external prerequisite and unlock bridges for a focused chapter', () => {
    const course = courseRegistry.get('general-chemistry');
    expect(course).toBeDefined();
    // Chapter 2 depends on Chapter 1 lessons
    const ch2Graph = buildLessonGraph(course!, learningContent, 'gc-ch-2');

    const externalPrereqs = ch2Graph.nodes.filter(n => n.kind === 'external-prereq');
    expect(externalPrereqs.length).toBeGreaterThan(0);
    expect(externalPrereqs.every(n => n.tier === 0)).toBe(true);

    // Every edge flows strictly left-to-right (from.tier < to.tier)
    const nodeById = new Map(ch2Graph.nodes.map(n => [n.id, n]));
    for (const edge of ch2Graph.edges) {
      const from = nodeById.get(edge.fromId);
      const to = nodeById.get(edge.toId);
      expect(from).toBeDefined();
      expect(to).toBeDefined();
      expect(from!.tier).toBeLessThan(to!.tier);
    }

    // Chapter 1 unlocks Chapter 2 lessons as external-next bridges
    const ch1Graph = buildLessonGraph(course!, learningContent, 'gc-ch-1');
    const externalNext = ch1Graph.nodes.filter(n => n.kind === 'external-next');
    expect(externalNext.length).toBeGreaterThan(0);

    // Ionization energy has transitive ancestors back to root atomic structure
    const ionization = ch1Graph.nodes.find(n => n.id === 'gc-ionization-energy');
    expect(ionization?.ancestorIds).toContain('gc-atomic-structure');
    expect(ionization?.descendantIds).toContain('gc-atom-drawing-guide');
  });

  it('handles full-course DAGs (PHY1159) and metadata-only courses cleanly', () => {
    const phy = courseRegistry.get('phy1159');
    expect(phy).toBeDefined();
    const phyGraph = buildLessonGraph(phy!, learningContent, null);
    expect(phyGraph.nodes.length).toBeGreaterThanOrEqual(5);
    expect(phyGraph.edges.length).toBeGreaterThan(0);

    const mat = courseRegistry.get('mat1091');
    expect(mat).toBeDefined();
    const metadataOnly = { ...mat!, chapterIds: [] };
    expect(buildChapterGraph(metadataOnly, learningContent).nodes).toHaveLength(0);
    expect(buildLessonGraph(metadataOnly, learningContent, null).nodes).toHaveLength(0);
  });
});
