import { Notification } from 'components/Notification/Notification';
import React from 'react';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={css.statisticsWrapper}>
      <h2 className={css.title}>Statistics</h2>

      {countTotalFeedback() <= 0 ? (
        <Notification />
      ) : (
        <>
          <p className={css.content}>Good: {good}</p>
          <p className={css.content}>Neutral: {neutral}</p>
          <p className={css.content}> Bad: {bad}</p>
          <p className={css.content}>Total: {countTotalFeedback()}</p>
          <p className={css.content}>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </p>
        </>
      )}
    </div>
  );
};
