import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const fontFamily = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fontFamily.className}>
      <Component {...pageProps} />
    </main>
  );
}
