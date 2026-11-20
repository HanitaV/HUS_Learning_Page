import type { ExerciseDefinition } from '../../domain/workspace';
import { normalizeVietnamese } from '../courses/search';

export function evaluateAnswer(exercise: ExerciseDefinition, answer: string | readonly string[]): boolean {
  if (exercise.kind === 'semi-essay') {
    return false;
  }
  if (exercise.kind === 'short-answer') {
    return typeof answer === 'string' && exercise.answers.some(value => normalizeVietnamese(value).trim() === normalizeVietnamese(answer).trim());
  }
  const selected = typeof answer === 'string' ? [answer] : answer;
  return selected.length === exercise.answers.length && new Set(selected).size === selected.length &&
    selected.every(id => exercise.choices.some(choice => choice.id === id) && exercise.answers.includes(id));
}
