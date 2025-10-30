import React from 'react';
import type { BlogPost } from '../types/blog';
import CategoryBadge from './CategoryBadge';
import placeholder from '../assets/react.svg';

const BlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="w-full h-52 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
        <img 
          src={blog.image || placeholder} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-300 text-sm mb-2">
          <span>{blog.date}</span>
          <span>{blog.author}</span>
        </div>
        <CategoryBadge category={blog.category} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">{blog.title}</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 flex-1">{blog.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition self-start">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
