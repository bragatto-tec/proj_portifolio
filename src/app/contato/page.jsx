"use client";

import styles from './contato.module.css';
export default function ContatoPage() {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const nome = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (nome === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Mensagem enviada com sucesso!');
        form.reset();
    };

    return (
        <article className={styles['contact-page-container']}>
            <div className={styles['contact-flex-container']}>
                <div className={styles.sobre}>
                    <h2>Sobre Mim</h2>
                    <p>
                        Sou uma profissional apaixonada por publicidade e propaganda, com um forte interesse em criar
                        soluções visuais que comunicam e engajam. Minha jornada acadêmica tem sido focada em
                        desenvolver habilidades em design gráfico, estratégia de marca e marketing digital.
                    </p>
                    <p>
                        Acredito que um bom design não é apenas esteticamente agradável, mas também funcional e
                        estratégico. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer.
                    </p>

                    <div className={styles['social-links']}>
                        <a href="https://www.instagram.com/bia.bragatto" target="_blank" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@bia.bragatto?_t=8ULevJF31gT&_r=1" target="_blank" aria-label="tik-tok">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="mailto:bia.bragatto@gmail.com" aria-label="Gmail">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.forms}>
                    <h2>Entre em Contato</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className={styles['form-group']}>
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" rows="6"></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </article>
    );
}