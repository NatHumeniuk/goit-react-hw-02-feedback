import React from 'react';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <div className={css.statisticsWrapper}>
      <p className={css.content}>Good: {good}</p>
      <p className={css.content}>Neutral: {neutral}</p>
      <p className={css.content}> Bad: {bad}</p>
      <p className={css.content}>Total: {total}</p>
      <p className={css.content}>
        Positive feedback: {positiveFeedbackPercentage}%
      </p>
    </div>
  );
};
