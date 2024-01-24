import styles from './page.module.css'
import localFont from 'next/font/local'

const headingFont = localFont({
  src: './fonts/ABCReproMono-Medium.woff2',
  display: 'swap',
})

export default function Home() {
  return (
    <main>
      <section className={styles.header}>
        <p className={headingFont.className}>Decoy</p>
      </section>

      <section className={styles.whoweare}>
        <h2 className={headingFont.className}>Who We Are</h2>
        <p>Decoy draws its name from the meticulously crafted wooden decoys that you find in  grandpa&apos;s garage. While our products are tailored to resonate with our clients' needs, Decoy is more than a representation—it's the real deal.</p>
      </section>
    </main>
  )
}