import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebase'; // Adjust according to your Firebase config
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const Post = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts from Firestore
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const fetchedPosts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPosts(fetchedPosts);
  };

  // Handle image upload change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Add or update post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl = '';
      if (image) {
        const imageRef = ref(storage, `posts/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (editMode && currentPostId) {
        const postRef = doc(db, 'posts', currentPostId);
        await updateDoc(postRef, {
          title,
          date,
          content,
          ...(imageUrl && { imageUrl }),
        });
        alert('Post updated successfully!');
      } else {
        await addDoc(collection(db, 'posts'), {
          title,
          date,
          content,
          imageUrl,
        });
        alert('Post added successfully!');
      }

      resetForm();
      fetchPosts();
    } catch (error) {
      console.error('Error posting:', error);
      alert('Error posting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Set form to edit mode
  const handleEdit = (post) => {
    setTitle(post.title);
    setDate(post.date);
    setContent(post.content);
    setImage(null);
    setImagePreview(post.imageUrl || null);
    setEditMode(true);
    setCurrentPostId(post.id);
  };

  // Handle post deletion
  const handleDelete = async (postId, imageUrl) => {
    try {
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }

      await deleteDoc(doc(db, 'posts', postId));
      alert('Post deleted successfully!');
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post. Please try again.');
    }
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setDate('');
    setContent('');
    setImage(null);
    setImagePreview(null);
    setEditMode(false);
    setCurrentPostId(null);
  };

  return (
    <div className="p-4 mt-28 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{editMode ? 'Edit Post' : 'Create a New Post'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded p-2 w-full"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="border rounded p-2 w-full"
            accept="image/*"
          />
          {imagePreview && (
            <div className="mt-2">
              <p className="text-gray-600">Image Preview:</p>
              <img src={imagePreview} alt="Preview" className="w-20 mt-2" />
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
        >
          {isSubmitting ? (editMode ? 'Updating...' : 'Posting...') : editMode ? 'Update Post' : 'Post Update'}
        </button>
        {editMode && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 text-white p-2 rounded mt-4 w-full"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="mt-20">
        <h3 className="text-xl font-semibold mb-4">Posts</h3>
        <div className="">
          {posts.map((post) => (
            <div key={post.id} className="border rounded p-4 mb-4">
              <h4 className="text-lg font-bold">{post.title}</h4>
              <p className="text-gray-600">{post.date}</p>
              <p>{post.content.slice(0, 50)}...</p>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="mt-2 w-20" />}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id, post.imageUrl)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
