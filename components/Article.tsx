import Image from 'next/image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";



const Article = ( { article }: any) => {
    const url = 'https:' + article.image.fields.file.url
        return (
        <div className='text-center'>
        
        <div className='flex justify-around'>

            <div className='font-bold font-["Calistoga"] text-5xl m-3'>
                {article.title}
            </div>
                
        </div>
            <div className='sm:mx-40 body'>
            <Image className='m-auto p-5 sm:float-left sm:ml-52 sm:mr-10 sm:mt-10' src={url} alt="thumbmnail" height="300" width="300" />
            <div className='m-5 sm:px-48 py-10 sm:text-left'>
              <div className="prose dark:prose-invert max-w-none font-sans">
              {documentToReactComponents(article.body, renderOption)}
              </div>
            
            </div>
        </div>
        </div>
    );
    };

    export default Article;


    // to display images in rich text
    const renderOption = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
            return (<Image
                alt='rich-img'
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
            />)
          }
        }
      }