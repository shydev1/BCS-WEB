import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 
import './Megas.css';
import Modal from "./Modal";



const Megas = () => {
  const [posts, setPosts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + posts.length) % posts.length);
  };

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="slider-container text-center" {...handlers}>
      {posts.length > 0 && (
        <div>
          <div>
            <img
              src={posts[currentSlide].imageUrl}
              alt={`Slide ${currentSlide + 1}`}
              className="slider-image"
            />
            <h2 className="text-base mt-5 font-medium text-indigo-300 mb-1">
              {posts[currentSlide].date}
            </h2>
            <p className="slider-tit text-start">{posts[currentSlide].title}</p>
            <p className="slider-text text-start">{posts[currentSlide].content.slice(0, 200)}</p>
            <div className="flex items-center flex-wrap">
              <button
                onClick={() => openModal(posts[currentSlide])}
                className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
              >
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
              </button>
            </div>
            <div className="arrow-buttons">
              <button onClick={prevSlide} className="arrow-button">{'<'}</button>
              <button onClick={nextSlide} className="arrow-button">{'>'}</button>
            </div>
          </div>
          <div className="dot-indicators">
            {posts.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      )}

      {selectedPost && (
        <Modal post={selectedPost} onClose={closeModal} />
      )}
    </div>
  );
};

export default Megas;
