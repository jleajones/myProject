import React from 'react';

import styles from './stylesheet.css'

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
