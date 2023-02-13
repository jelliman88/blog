import { Inter } from '@next/font/google'
import type { GetStaticProps, NextPage } from "next";
import { IArticleFields } from "../src/@types/contentful";
import ContentService from "@/src/util/content-service";
import ArticleLink from '@/components/ArticleLink';


interface Props {
  articles: IArticleFields[];
}

const Home: NextPage<Props> = ({ articles }) => { 
  return ( 
    <div className='sm:flex sm:flex-wrap sm:justify-center'>
      {articles.map((article, i) => (
          
          <ArticleLink key={i} article={article} />
        ))}
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
