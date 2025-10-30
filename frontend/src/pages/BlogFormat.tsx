// import React, { useState } from "react";
// import { db, storage } from "../firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// export default function BlogFormat() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   // Handle file input
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   // Submit blog
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       let imageUrl = "";
//       if (image) {
//         const storageRef = ref(storage, `blogs/${Date.now()}_${image.name}`);
//         await uploadBytes(storageRef, image);
//         imageUrl = await getDownloadURL(storageRef);
//       }

//       await addDoc(collection(db, "blogs"), {
//         title,
//         content,
//         image: imageUrl,
//         date: serverTimestamp(),
//         author: "Admin",
//       });

//       setTitle("");
//       setContent("");
//       setImage(null);
//       alert("✅ Blog Published!");
//     } catch (error) {
//       console.error("Error publishing blog:", error);
//       alert("❌ Failed to publish blog. Check console.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center py-12 px-6 text-white">
//       {/* Page Title */}
//       <h1 className="text-5xl font-extrabold mb-2 text-center text-yellow-300 drop-shadow-lg">
//         Write a Blog ✍️
//       </h1>
//       <p className="text-lg text-yellow-100 text-center mb-8">
//         Share your thoughts, guides, or stories here.
//       </p>

//       {/* Blog Form - NO BOX */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-3xl flex flex-col gap-8"
//       >
//         {/* Blog Title */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Blog Title
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your blog title..."
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
//             required
//           />
//         </div>

//         {/* Blog Content */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Blog Content
//           </label>
//           <textarea
//             placeholder="Write your blog here..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows={8}
//             className="w-full bg-transparent border-2 border-yellow-400 rounded-lg text-white placeholder-gray-300 p-3 focus:outline-none focus:border-yellow-200"
//             required
//           />
//         </div>

//         {/* Blog Image */}
//         <div>
//           <label className="block text-yellow-200 mb-2 font-semibold">
//             Blog Image
//           </label>
//           <label className="bg-yellow-400 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition inline-block w-max">
//             {image ? image.name : "Upload Image"}
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
//           Publish Blog
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function BlogFormat() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState(""); // new field
  const [tags, setTags] = useState(""); // comma-separated string
  const [image, setImage] = useState(""); // optional image URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const blogData = {
        title,
        summary,
        content,
        author,
        category,
        tags: tags.split(",").map(tag => tag.trim()), // convert to array
        image,
      };

      const response = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) throw new Error("Failed to add blog");

      const savedBlog = await response.json();
      console.log("Blog added:", savedBlog);

      // Reset form
      setTitle("");
      setSummary("");
      setContent("");
      setAuthor("");
      setCategory("");
      setTags("");
      setImage("");
      alert("✅ Blog Published!");
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("❌ Failed to publish blog.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 text-white">
      

      <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col gap-6">
        {/* Title */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">Blog Title</label>
          <input
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
          <label className="block text-yellow-200 mb-2 font-semibold">Summary</label>
          <textarea
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
          <label className="block text-yellow-200 mb-2 font-semibold">Content</label>
          <textarea
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
          <label className="block text-yellow-200 mb-2 font-semibold">Author</label>
          <input
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
          <label className="block text-yellow-200 mb-2 font-semibold">Category</label>
          <input
            type="text"
            placeholder="Enter category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">Tags (comma separated)</label>
          <input
            type="text"
            placeholder="e.g., JavaScript, React"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white placeholder-gray-300 p-2 focus:outline-none focus:border-yellow-200"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-yellow-200 mb-2 font-semibold">Blog Image URL</label>
          <input
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
          Publish Blog
        </button>
      </form>
    </div>
  );
}
