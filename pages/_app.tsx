import 'tailwindcss/tailwind.css';
import '../styles/prism.css';
import type { AppProps } from 'next/app';
import Layout from '../components/UIElements/Layout';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
