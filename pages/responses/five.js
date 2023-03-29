import styles from '@/styles/Home.module.css'

export default function Five() {
    return <>
    <main className={styles.main}>
    <div className={styles.description}>
        Hello, thank you for reaching out. For this error could you let us know if your project is a part of a Monorepo? I ask because this is usually caused by a misconfigured pipeline that did not properly specify outputs of .next/**
    </div>
    </main>
  </>
  }