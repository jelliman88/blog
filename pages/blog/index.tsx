import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { IArticleFields } from '../../src/@types/contentful';
import ContentService from '@/src/util/content-service';
import ArticleLink from '@/components/ArticleLink';
import Filter from '@/components/Filter';

interface Props {
  articles: IArticleFields[];
}

const Home: NextPage<Props> = ({ articles }) => {
  const [filter, setFilter] = useState<string>('all');
  const types: Array<String> = ['all'];

  articles.map((article) => {
    const tags = article.seo?.fields.keywords
    if (tags) {
      tags.map((tag) => {
        if (!types.includes(tag)) {
          types.push(tag)
        }
      })
    };
    })
   
  return (
    <div className='mb-auto'>
      <div className='flex justify-center'>
      <Filter filter={filter} types={types} setFilter={setFilter} articles={articles} />
      </div>
      
      <div className='flex flex-col sm:flex-row sm:justify-evenly'>
      {articles.map((article, i) => (
        filter === 'all' || article.seo?.fields.keywords?.includes(filter) ?
        <ArticleLink index={i} article={article} types={types} />: null
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
