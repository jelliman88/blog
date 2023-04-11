import React from 'react';
import Project from '@/components/Project';

type Props = {
  projects: Project[];
}

const Portfolio: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-4 md:w-3/4 lg:w-1/2 p-6 w-52 mx-auto">
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};
 
const projectsArr = [{title: 'slolearner.net',
  description: 'Slo learner is a language learning platform for English speakers wishing to learn Slovenian and vice versa. It is built using Django for the backend/static pages and includes a hybrid React frontend for the more complex parts.  There is a custom CMS for the teachers to create content for the students. Content includes lessons, flashcards, tests and audio clips.  The media files are stored and served via AmazonS3.  I am currently developing the accompanying phone app using React Native and Typescript.'
  ,
  websiteLink: 'https://www.slolearner.net',
  githubLink: 'https://github.com/jelliman88/slolearner.net-public-'},
  {title: 'jelli.cloud',
  description: 'My personal website.  Built using Next.js with Typescript, TailwindCSS and Contentful as a headless CMS. The site is hosted on Vercel.'
  ,
  websiteLink: 'https://jelli.cloud/portfolio',
  githubLink: 'https://github.com/jelliman88/blog'},
  {title: 'Supermarket',
  description: 'Inhouse webshop stock tracking app used by employees in our northern EU division. Built using Django/Vanilla JS with full CRUD functionality.'
  ,
  websiteLink: 'http://supermarket.eu.pythonanywhere.com',
  githubLink: '#'},
  

]

const App = () => {
  return <Portfolio projects={projectsArr} />;
};


export default App;
