import Link from "next/link";
import Image from "next/image";

const ArticleLink = ({ article }: any) => {
    const url = 'https:' + article.image.fields.file.url
    
    return (
        <Link href={`/article/${article.slug}`} className='group p-6 w-52 mx-auto my-4 border border-black border-4 rounded-lg shadow sm:flex sm:flex-wrap sm:justify-center sm:hover:border-pink-500 dark:border-white
        sm:transition sm:ease-in-out sm:hover:-translate-y-1 sm:hover:scale-110 duration-300'>
             
            <h2 className="text-lg text-center font-['Calistoga']">{article.title}</h2>
            <div className='min-h-max'>
            <Image priority className="rounded m-auto" src={url} alt="logo" height="100" width="100" />
            </div>
            
            <div className='flex justify-center mx-auto my-2'>
                <span className="text-3xl font-['Calistoga']">{article.rating}</span>
                <span className='mt-1 ml-2'>
                <Image src="/star.png" alt="logo" height="25" width="25"/>
                </span>
                
            </div>
           
          </Link>
    );
    };

export default ArticleLink;