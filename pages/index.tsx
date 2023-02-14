import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { IArticleFields } from '../src/@types/contentful';
import ContentService from '@/src/util/content-service';
import ArticleLink from '@/components/ArticleLink';
import Filter from '@/components/Filter';

interface Props {
  articles: IArticleFields[];
}

const Home: NextPage<Props> = ({ articles }) => {
  const [filter, setFilter] = useState<string | null>('all');
  const types: Array<String> = ['all'];
  articles.map((article) => {
    const type: string = article.type!;
    if (!types.includes(type)) {
      types.push(type);
    }
  });
  return (
    <div>
      <div className='flex justify-center'>
      <Filter types={types} setFilter={setFilter} />
      </div>
      
      <div className='flex flex-col sm:flex-row sm:justify-evenly'>
      {articles.map((article, i) => (
        filter === 'all' || filter === article.type ?
        <ArticleLink key={i} article={article} types={types} />: null
      )
      )}
      </div>
      
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IArticleFields>('article')
  ).map((entry) => entry.fields);

  return {
    props: {
      articles,
    },
  };
};
