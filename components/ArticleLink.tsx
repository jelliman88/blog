import Link from "next/link";
import Image from "next/image";

const ArticleLink = ({ article }: any) => {
    const url = 'https:' + article.image.fields.file.url
    return (
        <Link href={`/article/${article.slug}`} className='flex space-x-4 p-6 m-6 border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'>
            <div className='w-1/2'>
            <h2 className='font-bold text-lg'>{article.title}</h2>
            
            </div>
        <Image className="rounded" src={url} alt="logo" height="100" width="100" />
          </Link>
    );
    };

export default ArticleLink;