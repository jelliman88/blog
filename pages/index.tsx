import { Inter } from '@next/font/google'
import type { GetStaticProps, NextPage } from "next";
import { IArticleFields } from "../src/@types/contentful";
import styles from "../styles/Home.module.css";
import ContentService from "../src/util/content-service";
import ArticleLink from '@/components/ArticleLink';


interface Props {
  articles: IArticleFields[];
}

const Home: NextPage<Props> = ({ articles }) => { 
  return ( 
    <div className={styles.container}>
    <main className={styles.main}>
      
      <div className={styles.grid}>
        {articles.map((article, i) => (
          <ArticleLink key={i} article={article} />
        ))}
      </div>
    </main>
  </div>
  )
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IArticleFields>("article")
  ).map((entry) => entry.fields);

  return {
    props: {
      articles,
    },
  };
};

/* 
 <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
*/