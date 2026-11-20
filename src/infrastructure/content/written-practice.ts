import type { SemiEssayExercise } from '../../domain/semi-essay';

const banks = import.meta.glob<readonly SemiEssayExercise[]>('../../content/courses/*/written-practice.ts', { eager: true, import: 'default' });
export const writtenPractice: readonly SemiEssayExercise[] = Object.values(banks).flat();
