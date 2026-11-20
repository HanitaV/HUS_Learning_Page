import { useState } from 'react';
import type { ExerciseDefinition } from '../../domain/workspace';
import { evaluateAnswer } from '../../core/learning/exercises';
import { progressStore } from '../../infrastructure/progress/store';
import { useLearningProgress } from '../../app/useLearningProgress';
import { ExerciseFrame } from './ExerciseFrame';
import Markdown from './Markdown';

export default function ExerciseSession({ exercise }: { readonly exercise: ExerciseDefinition }) {
  const { progress } = useLearningProgress();
  const [correct, setCorrect] = useState<boolean | null>(null);

  if (exercise.kind === 'semi-essay') {
    return null;
  }

  const pastAttempts = progress.attempts.filter(attempt => attempt.exerciseId === exercise.id);
  const solvedPreviously = pastAttempts.some(attempt => attempt.correct);
  const attemptSummary =
    pastAttempts.length > 0 ? `Đã thử ${pastAttempts.length} lần` : undefined;

  return (
    <ExerciseFrame
      title={exercise.title}
      kind={exercise.kind}
      prompt={<Markdown>{exercise.prompt}</Markdown>}
      choices={
        exercise.kind === 'short-answer'
          ? []
          : exercise.choices.map(c => ({ id: c.id, label: <Markdown inline>{c.label}</Markdown> }))
      }
      completed={correct === true || solvedPreviously}
      attemptSummary={attemptSummary}
      feedback={
        correct === null
          ? null
          : {
              status: correct ? 'correct' : 'incorrect',
              message: correct
                ? 'Chính xác. Bạn có thể xem giải thích hoặc làm lại để ôn tập.'
                : 'Chưa đúng. Hãy kiểm tra lại lập luận và thử lại.',
            }
      }
      solution={
        (correct !== null || solvedPreviously) && exercise.explanation ? (
          <Markdown>{exercise.explanation}</Markdown>
        ) : null
      }
      onReset={() => setCorrect(null)}
      onSubmit={answer => {
        const result = evaluateAnswer(exercise, answer);
        setCorrect(result);
        progressStore.dispatch({
          type: 'attempt',
          exerciseId: exercise.id,
          correct: result,
          at: new Date().toISOString(),
        });
      }}
    />
  );
}
