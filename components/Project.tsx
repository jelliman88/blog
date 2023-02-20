import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  websiteLink: string;
  githubLink: string;
};

type Props = {
  project: Project;
  index: number;
};

const Project: React.FC<Props> = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-20 px-4 dark:prose-invert"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className='flex justify-evenly m-5'>
      <Link
        href={project.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 font-bold pt-4 mr-2"
      >
        website
      </Link>
      <Link  href={project.githubLink}>
      <Image src="/github.png" alt="jelli" height="60" width="60"/>
      </Link>
      </div>
     
    </motion.div>
  );
};

export default Project;
