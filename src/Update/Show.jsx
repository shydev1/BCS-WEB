import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const UserPost = () => {
  const [post, setMPost] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const fetchedPost = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMPost(fetchedPost);
  };

  return (
    <div className="">
      {post.map((post) => (
        <div key={post.id} className="p-4 cursor-pointer sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 pr-5 pt-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden duration-300 shadow-lg hover:shadow-gray-900">
            <Link to="/UpcomingEvents">
              <img
                className="lg:h-72 h-48 w-full object-cover object-center"
                src={post.imageUrl}
                alt={post.title}
              />
              <div className="p-6">
                <h2 className="text-base font-medium text-indigo-300 mb-1">
                  {post.date}
                </h2>
                <h1 className="text-xl font-semibold mb-3 text-center">
                  {post.title}
                </h1>
                <p className="leading-relaxed ml-4 mb-3">
                  {post.content.slice(0, 100)}...
                </p>
                <div className="flex items-center flex-wrap">
                  <Link to="/UpcomingEvents" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPost;
