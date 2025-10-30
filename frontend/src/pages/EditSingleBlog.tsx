import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Blog = {
  _id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  category?: string;
  tags?: string[];
  image?: string;
};

// Edit Single Blog Form Component
export default function EditSingleBlog() {
  const { id } = useParams<{ id: string }>(); // blog ID from URL
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  // Fetch blog by ID and pre-fill form
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog");

        const data: Blog = await response.json();
        setTitle(data.title);
        setSummary(data.summary);
        setContent(data.content);
        setAuthor(data.author);
        setCategory(data.category || "");
        setTags(data.tags?.join(", ") || "");
        setImage(data.image || "");
      } catch (error) {
        console.error("Error fetching blog:", error);
        alert("Failed to load blog data.");
      }
    };

    fetchBlog();
  }, [id]);

  // Handle form submit (update blog)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      const blogData = {
        title,
        summary,
        content,
        author,
        category,
        tags: tags.split(",").map(tag => tag.trim()),
        image,
      };

      const response = await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) throw new Error("Failed to update blog");

      const updatedBlog = await response.json();
      console.log("Blog updated:", updatedBlog);
      alert("✅ Blog updated successfully!");
      navigate("/admin"); // go back to admin/dashboard
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("❌ Failed to update blog.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 text-white">
     

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-6"
      >
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-yellow-200 mb-2 font-semibold">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter your blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <label htmlFor="summary" className="block text-yellow-200 mb-2 font-semibold">
            Summary
          </label>
          <textarea
            id="summary"
            placeholder="Short summary of your blog..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={3}
            className="w-full bg-transparent border-2 border-yellow-400 rounded-lg text-white placeholder-gray-300 p-3 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-yellow-200 mb-2 font-semibold">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your blog here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full bg-transparent border-2 border-yellow-400 rounded-lg text-white placeholder-gray-300 p-3 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-yellow-200 mb-2 font-semibold">
            Author
          </label>
          <input
            id="author"
            type="text"
            placeholder="Enter author name..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-yellow-200 mb-2 font-semibold">
            Category
          </label>
          <input
            id="category"
            type="text"
            placeholder="Enter category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-yellow-200 mb-2 font-semibold">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            placeholder="e.g., JavaScript, React"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-yellow-200 mb-2 font-semibold">
            Blog Image URL
          </label>
          <input
            id="image"
            type="text"
            placeholder="Enter image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
