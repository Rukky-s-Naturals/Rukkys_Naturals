import React, { useState } from "react";

const BlogPost = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Importance of Organic Farming",
      date: "2025-05-10",
      status: "Published",
    },
    {
      id: 2,
      title: "Top 5 Herbs for a Healthy Life",
      date: "2025-05-08",
      status: "Draft",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [editingPost, setEditingPost] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const addPost = () => {
    setPosts([
      ...posts,
      {
        ...newPost,
        id: posts.length + 1,
        date: new Date().toISOString().split("T")[0],
        status: "Draft",
      },
    ]);
    setNewPost({ title: "", content: "", category: "" });
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const saveEditedPost = () => {
    setPosts(
      posts.map((post) => (post.id === editingPost.id ? editingPost : post))
    );
    setEditingPost(null);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Manage Blog Posts</h2>

      {/* Add Blog Post Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Post</h3>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={newPost.title}
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded-lg"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newPost.content}
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded-lg"
        ></textarea>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newPost.category}
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded-lg"
        />
        <button
          onClick={addPost}
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-500 cursor-pointer"
        >
          Add Post
        </button>
      </div>

      {/* Blog List */}
      <h3 className="text-lg font-semibold mb-2">Blog Posts</h3>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border border-gray-300 px-4 py-2">{post.title}</td>
              <td className="border border-gray-300 px-4 py-2">{post.date}</td>
              <td className="border border-gray-300 px-4 py-2">{post.status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleEditPost(post)}
                  className="bg-green-400 text-white px-2 py-1 rounded-lg mr-2 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Blog Post Section */}
      {editingPost && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Edit Post</h3>
          <input
            type="text"
            name="title"
            value={editingPost.title}
            onChange={(e) =>
              setEditingPost({ ...editingPost, title: e.target.value })
            }
            className="w-full mb-2 p-2 border rounded-lg"
          />
          <textarea
            name="content"
            value={editingPost.content}
            onChange={(e) =>
              setEditingPost({ ...editingPost, content: e.target.value })
            }
            className="w-full mb-2 p-2 border rounded-lg"
          ></textarea>
          <input
            type="text"
            name="category"
            value={editingPost.category}
            onChange={(e) =>
              setEditingPost({ ...editingPost, category: e.target.value })
            }
            className="w-full mb-2 p-2 border rounded-lg"
          />
          <button
            onClick={saveEditedPost}
            className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditingPost(null)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
