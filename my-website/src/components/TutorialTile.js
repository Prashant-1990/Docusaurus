import React from 'react';
import Link from '@docusaurus/Link';
import styles from './TutorialTile.module.css';

export default function TutorialTile({title, description, link, icon}) {
  return (
    <div className={styles.tile}>
      <Link to={link} className={styles.tileLink}>
        <div className={styles.icon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}
