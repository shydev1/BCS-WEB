// import React, { useState, useEffect } from "react";
// import { getPosts } from "./DUM";
// import dateFormat from "dateformat";
// import { Link } from "react-router-dom";
// import Markdown from "markdown-to-jsx";
// import { motion } from "framer-motion";


// const PostCard = ({ post, createdAt }) => {
//   const [showFullPost, setShowFullPost] = useState(false);

//   const handleClick = (event) => {
//     event.preventDefault();
//     setShowFullPost(true);
//   };

//   const handleClick2 = (event) => {
//     event.preventDefault();
//     setShowFullPost(false);
//   };

//   const cardClassName = showFullPost ? "h-auto" : "h-[400px]";
//   return (
//     <div className="md:p-6  p-1">
//       <div
//         className={`rounded-lg overflow-hidden text-center shadow-md bg-white w-80 ${cardClassName}`}
//       >
//         <img
//           src={post.thumbnail}
//           alt={post.title}
//           className="h-32 w-full object-contain"
//         />
//         <div className="p-6">
//           <p className="text-gray-500 text-[15px] flex justify-between">
//             <h2 className="text-2xl text-gray-800 font-bold mb-2">
//               {post.title}
//             </h2>
//             {dateFormat(createdAt, "mediumDate")}
//           </p>
//           {showFullPost ? (
//             <Markdown className="text-gray-600 text-base z-50">
//               {post.content}
//             </Markdown>
//           ) : (
//             <p className="text-gray-600 text-base truncate whitespace-normal break-words h-5">
//               {post.content}
//             </p>
//          )}
//         </div>
//         {!showFullPost && (
//           <Link
//             to={`/posts/${post.slug}`}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={handleClick}
//           >
//             Read More
//           </Link>
//         )}

//         {showFullPost && (
//           <h1
//             to={`/posts/${post.slug}`}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px] mb-[10px] ml-32"
//             onClick={handleClick2}
//           >
//             Close
//           </h1>
//         )}
//       </div>
//     </div>
//   );
// };

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const { posts } = await getPosts();
//       setPosts(posts);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <motion.div
//     className="md:pl-16 md:pr-16"
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{
//         duration: 2,
//         delay: 0.3,
//         ease: [0, 0.71, 0.2, 1.01]
//     }}
//     >                      <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fblogbanner.jpg?alt=media&token=d8c59a57-094f-4a77-a94e-a88e04748f25" style={{ width: '95%', padding: 0,  marginTop: 0    }}/>
//       <div className="flex flex-wrap justify-between p-10">
//         {posts.map((post) => (
//           <div key={post.id} className="w-full md:w-1/3 mb-3 px-2">
//             <PostCard post={post} />
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Blog;


import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  console.log("Blog Object");
  console.log(blogs);


  return (
    
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">

          {blogs.map((blog) => (
            <div >
              <div className="bg-white rounded-xl overflow-hidden h-[500px] drop-shadow-md">
                <img
                  className="h-56 w-full object-cover"
                  src={blog.thumbnail}
                />
                <div className="p-8">
                  <h3
                    className="font-bold text-2xl my-1"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </h3>

                  <div className="text-gray-600 text-xl"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                  >
                    {blog.content}
                  </div>
                  <div class="flex items-center flex-wrap justify-between mt-3">

                    <h1 className="text-blue-400">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </h1>
                    <Link key={blog.id} to={`/blog/${blog.id}`} class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
