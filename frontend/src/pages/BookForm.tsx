// import React, { useState } from "react";

// export default function BookForm() {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [summary, setSummary] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   // Handle file input
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   // Submit book
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // For now, just log the form data
//       const bookData = {
//         title,
//         author,
//         summary,
//         category,
//         tags: tags.split(",").map((tag) => tag.trim()),
//         imageName: image?.name || "",
//       };

//       console.log("Book submitted:", bookData);

//       // Reset form
//       setTitle("");
//       setAuthor("");
//       setSummary("");
//       setCategory("");
//       setTags("");
//       setImage(null);

//       alert("✅ Book Submitted! Check console log for data.");
//     } catch (error) {
//       console.error("Error publishing book:", error);
//       alert("❌ Failed to submit book. Check console.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center py-12 px-6 text-white">
//       <h1 className="text-5xl font-extrabold mb-2 text-center text-yellow-300 drop-shadow-lg">
//         Publish a Book 📚
//       </h1>
//       <p className="text-lg text-yellow-100 text-center mb-8">
//         Add your latest book, guide, or story here.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-3xl flex flex-col gap-8"
//       >
//         {/* Book Title */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Book Title
//           </label>
//           <input
//             type="text"
//             placeholder="Enter book title..."
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
//             required
//           />
//         </div>

//         {/* Author */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Author
//           </label>
//           <input
//             type="text"
//             placeholder="Author name..."
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
//             required
//           />
//         </div>

//         {/* Summary */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Summary
//           </label>
//           <textarea
//             placeholder="Brief summary..."
//             value={summary}
//             onChange={(e) => setSummary(e.target.value)}
//             rows={6}
//             className="w-full bg-transparent border-2 border-yellow-400 rounded-lg text-white placeholder-gray-300 p-3 focus:outline-none focus:border-yellow-200"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Category
//           </label>
//           <input
//             type="text"
//             placeholder="Category (e.g., Fiction, Self-help)"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
//             required
//           />
//         </div>

//         {/* Tags */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Tags (comma separated)
//           </label>
//           <input
//             type="text"
//             placeholder="Enter tags, separated by commas..."
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
//           />
//         </div>

//         {/* Book Cover Image */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Book Cover
//           </label>
//           <label className="bg-yellow-400 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition inline-block w-max">
//             {image ? image.name : "Upload Cover Image"}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300"
//         >
//           Publish Book
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [buyLink, setBuyLink] = useState(""); // ✅ New field

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const bookData = {
        title,
        author,
        summary,
        category,
        tags: tags.split(",").map(tag => tag.trim()),
        image,
        buyLink, // ✅ include in submission
      };

      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) throw new Error("Failed to add book");

      const savedBook = await response.json();
      console.log("Book added:", savedBook);

      // Reset form
      setTitle(""); setAuthor(""); setSummary("");
      setCategory(""); setTags(""); setImage(""); setBuyLink(""); // reset buyLink
      alert("✅ Book Published!");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to publish book.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 text-white">
      

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-8"
      >
        {/* Book Title */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Book Title
          </label>
          <input
            type="text"
            placeholder="Enter book title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Author
          </label>
          <input
            type="text"
            placeholder="Author name..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Summary
          </label>
          <textarea
            placeholder="Brief summary..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={6}
            className="w-full bg-transparent border-2 border-yellow-400 rounded-lg text-white placeholder-gray-300 p-3 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Category
          </label>
          <input
            type="text"
            placeholder="Category (e.g., Fiction, Self-help)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Tags (comma separated)
          </label>
          <input
            type="text"
            placeholder="Enter tags, separated by commas..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Book Cover URL */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Book Cover URL
          </label>
          <input
            type="text"
            placeholder="Enter image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Buy Now URL */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">
            Buy Now URL
          </label>
          <input
            type="text"
            placeholder="Enter Buy Now link..."
            value={buyLink}
            onChange={(e) => setBuyLink(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300"
        >
          Publish Book
        </button>
      </form>
    </div>
  );
}
