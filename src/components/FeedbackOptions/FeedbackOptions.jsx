import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.optionsWrapper}>
      {options.map(name => (
        <button
          key={name}
          className={css.optionBtn}
          type="button"
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
