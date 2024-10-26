import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../index.css";
import Megas from "./Megas"

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-lg relative modal-content"
      >
        <button
          onClick={onClose}
          className="absolute z-10 py-1 px-2 top-2 right-2 text-gray-500 rounded-full border-[1px] border-gray-400 hover:text-gray-600 shadow-lg"
        >
          close
        </button>
        <img
          className="w-full object-cover object-center rounded-md mb-4"
          src={post.imageUrl}
          alt={post.title}
        />
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <h3 className="text-indigo-300 mb-4">{post.date}</h3>
        <p className="leading-relaxed mb-4">{post.content}</p>
      </div>
    </div>
  );
};



const Mega = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const fetchedPosts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPosts(fetchedPosts);
  };

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <div className="text lg:p-5 w-full">
      <section className="hidden lg:flex flex-wrap items-center text-gray-600 pb-0 rounded">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 cursor-pointer sm:w-1/2 lg:w-1/3"
                onClick={() => openModal(post)}
              >
                <div className="h-full border-2 border-gray-200 pr-5 pt-2 border-opacity-60 rounded-lg overflow-hidden duration-300 shadow-lg hover:shadow-gray-900">
                  <img
                    className="lg:h-72 h-48 w-full object-cover object-center"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                      {post.date}
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3 text-center">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed ml-4 mb-3">
                      {post.content.slice(0, 400)}...
                    </p>
                    <div className="flex items-center flex-wrap">
                      <span className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
      <div className="inline lg:hidden">
      <Megas />
      </div>
    
    </div>
  );
};

export default Mega;
