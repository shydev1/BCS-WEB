import React, { useState, useEffect } from "react";
import { getPosts } from "../";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

const PostCard = ({ post, createdAt }) => {
  const [showFullPost, setShowFullPost] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowFullPost(true);
  };

  const handleClick2 = (event) => {
    event.preventDefault();
    setShowFullPost(false);
  };

  const cardClassName = showFullPost ? "h-auto" : "h-[400px]";
  return (
    <div className="md:p-6  p-1">
      <div
        className={`rounded-lg overflow-hidden text-center shadow-md bg-white w-96 ${cardClassName}`}
      >
        <img
          src={post.thumbnail}
          alt={post.title}
          className="h-48 w-full object-contain"
        />
        <div className="p-6">
          <p className="text-gray-500 text-[15px] flex justify-between">
            <h2 className="text-2xl text-gray-800 font-bold mb-2">
              {post.title}
            </h2>
            {dateFormat(createdAt, "mediumDate")}
          </p>
          {showFullPost ? (
            <Markdown className="text-gray-600 text-base z-50">
              {post.content}
            </Markdown>
          ) : (
            <p className="text-gray-600 text-base truncate whitespace-normal break-words h-12">
              {post.content}
            </p>
          )}
        </div>
        {!showFullPost && (
          <Link
            to={`/posts/${post.slug}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Read More
          </Link>
        )}

        {showFullPost && (
          <h1
            to={`/posts/${post.slug}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px] mb-[10px] ml-32"
            onClick={handleClick2}
          >
            Close
          </h1>
        )}
      </div>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-wrap justify-between ">
        {posts.map((post) => (
          <div key={post.id} className="w-full md:w-1/3 mb-3 px-2">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;