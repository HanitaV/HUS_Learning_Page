import type { ComponentType } from 'react';
import type { EntityId } from '../domain/learning';

export interface SubjectToolProps {
  readonly courseId: EntityId;
  readonly initialPreset?: string | undefined;
}

export interface SubjectToolLessonLink {
  readonly lessonId: EntityId;
  readonly preset?: string;
  readonly label: string;
}

export type SubjectToolKind = 'visualization' | 'simulation' | 'exercise' | 'code-lab';

export interface SubjectToolDefinition {
  readonly id: EntityId;
  readonly title: string;
  readonly kind: SubjectToolKind;
  /** Optional list of courseIds this tool applies to. When omitted, applies to all courses in the subject. */
  readonly courseIds?: readonly EntityId[];
  readonly lessonLinks?: readonly SubjectToolLessonLink[];
  readonly load: () => Promise<{ default: ComponentType<SubjectToolProps> }>;
}

/** React integration boundary. Domain types and calculations remain React-free. */
export interface SubjectModule {
  readonly subjectId: EntityId;
  /**
   * When `'practice-first'`, CoursePage splits the workspace into a prioritized
   * hands-on practice track (default) and a separate Theory & Foundations track.
   */
  readonly trackMode?: 'default' | 'practice-first';
  readonly practiceTrackLabel?: string;
  readonly theoryTrackLabel?: string;
  readonly defaultToolId?: EntityId;
  readonly tools?: readonly SubjectToolDefinition[];
}
