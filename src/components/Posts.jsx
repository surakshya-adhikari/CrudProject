import { useState, useEffect } from "react";
import { getPost } from "../api/PostApi";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ol className="list-decimal list-inside space-y-4">
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
                key={id}
              >
                <h2 className="text-xl font-semibold mb-2">Title: {title}</h2>
                <p className="bg-gray-700 p-4 rounded-md mb-4 text-gray-300">
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
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
