import { Poppins, League_Gothic, Inter, Oswald } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-league-gothic',
});

export const metadata = {
  title: 'Beatriz Bragatto',
  description: 'Portfólio de Beatriz Bragatto',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${leagueGothic.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>

      <body>
        <header>
          <img src="/logo.png" alt="Beatriz Bragatto Logo" />
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portifolio">Meu portfólio</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}