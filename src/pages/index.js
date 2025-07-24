import React from 'react';
import Layout from '@theme/Layout';
import TutorialTile from '../components/TutorialTile';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Tutorial Hub" description="A collection of tutorials">
      <main className={styles.main}>
        <h1 className={styles.heading}>Docusaurus Tutorials</h1>
        <div className={styles.tiles}>
          <TutorialTile
            title="Getting Started with Docusaurus"
            description="Learn the fundamentals of Docusaurus."
            link="/chapter-1-introduction"
          />
        </div>
      </main>
    </Layout>
  );
}
