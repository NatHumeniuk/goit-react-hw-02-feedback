import React from 'react';
import css from '../Title/Title.module.css';

export const Title = ({ children }) => {
  return (
    <section>
      <h2 className={css.title}>Please leave feedback</h2>
      {children}
    </section>
  );
};
