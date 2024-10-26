import React from 'react';

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute z-10 py-1 px-2 top-2 right-2 text-gray-500 rounded-full border-[1px] border-gray-400 hover:text-gray-600 shadow-lg"
        >
          &times;
        </button>
        <img
          className="w-full h- object-cover object-center rounded-md mb-4"
          src={post.imageUrl}
          alt={post.title}
        />
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <h3 className="text-indigo-300 mb-4">{post.date}</h3>
        <p className="leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
};

export default Modal;
