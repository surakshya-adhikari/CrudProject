import { useState, useEffect } from "react";
import { getPost, deletePost } from "../api/PostApi";

export const Posts = () => {
  const [data, setData] = useState([]);

  // Fetch Posts
  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Handle Delete
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedPosts = data.filter((post) => post.id !== id);
        setData(updatedPosts);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Handle Edit (Placeholder function)
  const handleEdit = (id) => {
    console.log("Edit post with ID:", id);
    // Implement edit logic here
  };

  return (
    <div className="container mx-auto p-4 bg-rose-700 text-white min-h-screen">
      <h1 className="text-3xl text-gray-900 font-bold text-center mb-6">Posts</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <div
              key={id}
              className="bg-zinc-600 p-6 rounded-lg shadow-lg border border-gray-700 w-full sm:w-1/2 lg:w-1/3"
            >
              <h2 className="text-xl  font-semibold mb-2 hover:bg-slate-700 text-rose-300">Title: {title}</h2>
              <p className="bg-emerald-700 hover:bg-emerald-800 p-4 rounded-md mb-4 text-rose-100">
                {body}
              </p>
              <div className="flex justify-between">
                <button
                  className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
                  onClick={() => handleEdit(id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
