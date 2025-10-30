import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles['bia-img']}>
            <img src="/foto1.png" alt="Beatriz Miyamoto Bragatto" />
          </div>
          <div className={styles.content}>
            <p className={styles.ano}>
              1999
            </p>
            <h2 style={{ fontFamily: 'var(--font-league-gothic)' }}>
              Beatriz Miyamoto Bragatto
            </h2>
            <p className={styles.description}>
              Sou uma estudante de publicidade e propaganda e espero que por aqui consiga mostrar um pouco dos meus trabalhos, sejam muito bem-vindos ao meu portfólio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}