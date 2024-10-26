import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Link } from 'react-router-dom/dist';

const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  let blog = {};
  if (blogs) {
    let arr = blogs.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  return (
    <div className="w-full pb-10 bg-[#f9f9f9] flex justify-center items-center">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2">
            <img className="w-full h-96 object-cover" src={blog.thumbnail} alt={blog.title} />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
            <div className="pt-5">
              <ReactMarkdown className="line-break">{blog.content}</ReactMarkdown>
            </div>
            <div className="bg-blue-500 w-32 mt-10 rounded-lg h-10 text-white hover:text-black hover:bg-white hover:border border-blue-800 cursor-pointer">
              <Link to={'/Blog'} className="mt-2 ml-10 absolute">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
