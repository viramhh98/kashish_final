import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSingleBook() {
  const { id } = useParams(); // get book id from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [buyLink, setBuyLink] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch existing book details
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`http://localhost:5000/books/${id}`);
        if (!res.ok) throw new Error("Failed to fetch book");
        const data = await res.json();

        setTitle(data.title || "");
        setAuthor(data.author || "");
        setSummary(data.summary || "");
        setCategory(data.category || "");
        setTags(data.tags?.join(", ") || "");
        setImage(data.image || "");
        setBuyLink(data.buyLink || "");
      } catch (err) {
        console.error(err);
        alert("❌ Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const updatedData = {
        title,
        author,
        summary,
        category,
        tags: tags.split(",").map((tag) => tag.trim()),
        image,
        buyLink,
      };

      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) throw new Error("Failed to update book");

      alert("✅ Book Updated Successfully!");
      navigate("/books"); // redirect to books list
    } catch (err) {
      console.error(err);
      alert("❌ Update failed.");
    }
  };

  if (loading)
    return (
      <p className="text-yellow-200 text-center mt-10">Loading...</p>
    );

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 text-white">
      

      <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col gap-8">
        {/* Book Title */}
        <div>
          <label htmlFor="title" className="block text-yellow-200 mb-2 font-semibold">
            Book Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title..."
            className="w-full bg-transparent border-b-2 border-yellow-400 p-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-200"
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
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name..."
            className="w-full bg-transparent border-b-2 border-yellow-400 p-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-200"
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
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter book summary..."
            rows={6}
            className="w-full bg-transparent border-2 border-yellow-400 rounded-lg text-white placeholder-gray-300 p-3 focus:outline-none focus:border-yellow-200"
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Fiction, Self-help"
            className="w-full bg-transparent border-b-2 border-yellow-400 p-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-200"
            required
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
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags separated by commas"
            className="w-full bg-transparent border-b-2 border-yellow-400 p-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-yellow-200 mb-2 font-semibold">
            Book Cover URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL..."
            className="w-full bg-transparent border-b-2 border-yellow-400 p-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Buy Link */}
        <div>
          <label htmlFor="buyLink" className="block text-yellow-200 mb-2 font-semibold">
            Buy Now URL
          </label>
          <input
            id="buyLink"
            type="text"
            value={buyLink}
            onChange={(e) => setBuyLink(e.target.value)}
            placeholder="Enter Buy Now link..."
            className="w-full bg-transparent border-b-2 border-yellow-400 p-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}
