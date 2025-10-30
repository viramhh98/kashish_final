import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Blog = {
  _id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  date?: any;
  author: string;
  category?: string;
  tags?: string[];
};

export default function EditBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        if (!response.ok) throw new Error("Failed to fetch blogs");

        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Delete a blog
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete blog");

      setBlogs((prev) => prev.filter((b) => b._id !== id));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog.");
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-6">
     

      <div className="flex flex-col w-full max-w-5xl gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row gap-4 hover:scale-105 transition transform group"
          >
            {/* Blog Image */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            )}

            {/* Blog Content */}
            <div className="flex flex-col p-6 gap-3 flex-1">
              <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
              <p className="text-gray-200 line-clamp-3">{blog.summary}</p>
              <p className="text-xl text-yellow-200 mt-1">
                by {blog.author} {blog.category && `| ${blog.category}`} |{" "}
                {blog.date ? new Date(blog.date).toLocaleDateString() : ""}
              </p>
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Edit Button */}
            <button
              type="button"
              aria-label="Edit blog"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/admin/edit-blog/${blog._id}`);
              }}
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg transition transform hover:scale-110 w-12 h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487l3.651 3.651M7.5 20.25h-3v-3l11.025-11.025 3 3L7.5 20.25z"
                />
              </svg>
            </button>

            {/* Delete Button */}
            <button
              type="button"
              aria-label="Delete blog"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(blog._id);
              }}
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-lg transition transform hover:scale-110 w-12 h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
