import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  return {
    props: {
      data: {
        contenuBlog1: 'contenu article 1',
        contenuBlog2: 'contenu article 2',
        contenuBlog3: 'contenu article 3',
      },
    },
  };
}

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>Accueil</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bienvenue sur mon blog statique généré avec Next.js</p>
        <ul>
          <li>{data.contenuBlog1}</li>
          <li>{data.contenuBlog2}</li>
          <li>{data.contenuBlog3}</li>
        </ul>
      </section>
    </Layout>
  );
}

