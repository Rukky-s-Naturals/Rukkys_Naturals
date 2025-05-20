import React, { useState } from "react";

const Blogpost = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
    imagePreview: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost({
        ...newPost,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const addPost = () => {
    if (!newPost.title.trim()) return;

    const newEntry = {
      id: posts.length + 1,
      title: newPost.title,
      category: newPost.category,
      content: newPost.content,
      imagePreview: newPost.imagePreview,
      date: new Date().toISOString().split("T")[0],
      status: "Draft",
    };

    setPosts([...posts, newEntry]);
    setNewPost({ title: "", content: "", category: "", image: null, imagePreview: null });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add New Post</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost();
        }}
        className="space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="category">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            value={newPost.category}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter category"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            rows={5}
            className="w-full border border-gray-300 rounded-md p-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Write your post content here"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="image">
            Upload Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-600 cursor-pointer"
          />
          {newPost.imagePreview && (
            <img
              src={newPost.imagePreview}
              alt="Preview"
              className="mt-3 max-h-48 rounded-md object-cover shadow-sm"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition cursor-pointer"
          >
            Add Post
          </button>
        </div>
      </form>

      {/* Posts List */}
      {posts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Posts List</h3>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 border border-gray-200 rounded-md shadow-sm"
              >
                <h4 className="text-xl font-medium">{post.title}</h4>
                <p className="text-gray-500 text-sm">{post.category}</p>
                <p className="mt-2">{post.content}</p>
                {post.imagePreview && (
                  <img
                    src={post.imagePreview}
                    alt={post.title}
                    className="mt-3 max-h-48 rounded-md object-cover"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Blogpost;
