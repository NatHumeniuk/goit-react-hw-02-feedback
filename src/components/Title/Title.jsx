import React from 'react';
import css from '../Title/Title.module.css';

export const Title = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
