import Link from "next/link";
import Image from "next/image";

const ArticleLink = ({ article }: any) => {
    
    return (
        <Link href={`/article/${article.slug}`} className='block flex justify-between space-x-4 p-6 m-6 border border-gray-200 rounded-lg shadow hover:bg-gray-400 dark:border-gray-700 dark:hover:bg-gray-400'>
            <div className='w-1/2'>
            <h2 className='font-bold text-lg underline'>{article.title}</h2>
            <p className=''>{article.description}</p>
            </div>
            

            
            <Image src="/jaws.jpeg" alt="logo" height="100" width="100" />
          </Link>
    );
    };

export default ArticleLink;