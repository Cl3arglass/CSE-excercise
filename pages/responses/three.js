import styles from '@/styles/Home.module.css'

export default function Three() {
    return <>
    <main className={styles.main}>
    <div className={styles.description}>Nuxt.js and Next.js share many similarities such as static and server resndering at the Edge but with Next.js on Vercel you can use a hybrid approach called Incremental Static Regeneration. Nuxt has a similar feature called ISG but it is not yet supported on Vercel.</div>
    </main>
  </>
  }