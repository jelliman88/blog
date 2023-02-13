import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { IArticleFields } from "@/src/@types/contentful";
import ContentService from "@/src/util/content-service";
import Article from "@/components/Article";


interface Props {
    article: IArticleFields;
  }
  

const article:NextPage<Props> = ({ article }) => {
    return (
        <Article article={article}/>
    );
};

export default article;
    
export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
    ctx,
  ) => {
    const { slug } = ctx.params!;
    const article = await ContentService.instance.getArticleBySlug(slug);
  
    if (!article) {
      return { notFound: true };
    }
  
    return {
      props: {
        article: article.fields,
      },
    };
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const articles =
      await ContentService.instance.getEntriesByType<IArticleFields>("article");
    
    return {
      paths: articles.map((article) => ({
        params: {
          slug: article.fields.slug,
        },
      })),
      fallback: false,
    };
  };

 