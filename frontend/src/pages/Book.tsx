// import React from 'react';
// import type { Blog } from '../types/blog';
// import placeholder from '../assets/react.svg';
// import Bookimg1 from '../assets/book1.jpg';
// import Bookimg2 from '../assets/bool2.jpg'; // fixed typo
// import Bookimg3 from '../assets/book3.jpg';

// const tempBooks: Blog[] = [
//   {
//     id: "1",
//     title: "The Mountain Guide",
//     date: "2025-09-23",
//     author: "Jane Doe",
//     summary: "A thrilling adventure guide for mountain explorers.",
//     content: "Full content for The Mountain Guide...",
//     category: "Travel",
//     image: Bookimg1,
//     tags: ["Adventure", "Nature", "Guide"]
//   },
//   {
//     id: "2",
//     title: "Pasta Perfection",
//     date: "2025-09-22",
//     author: "John Smith",
//     summary: "Master the art of homemade pasta with this comprehensive recipe book.",
//     content: "Full content for Pasta Perfection...",
//     category: "Food",
//     image: Bookimg2,
//     tags: ["Cooking", "Italian", "Recipe"]
//   },
//   {
//     id: "3",
//     title: "Mindful Living",
//     date: "2025-09-21",
//     author: "Alex Johnson",
//     summary: "Techniques and exercises to improve mindfulness and daily habits.",
//     content: "Full content for Mindful Living...",
//     category: "Self-help",
//     image: Bookimg3,
//     tags: ["Mindfulness", "Habits", "Self-care"]
//   },
//   {
//     id: "4",
//     title: "DIY Home Wonders",
//     date: "2025-09-20",
//     author: "Emily Lee",
//     summary: "Creative DIY home decor projects for every style.",
//     content: "Full content for DIY Home Wonders...",
//     category: "Creative",
//     image: placeholder,
//     tags: ["DIY", "Home", "Decor"]
//   },
//   {
//     id: "5",
//     title: "Urban Cafes Uncovered",
//     date: "2025-09-19",
//     author: "Sophia Brown",
//     summary: "Discover the best cafes in the city with style and comfort.",
//     content: "Full content for Urban Cafes Uncovered...",
//     category: "Lifestyle",
//     image: placeholder,
//     tags: ["Cafe", "Coffee", "Urban"]
//   }
// ];

// const Book: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       <h1 className="text-5xl font-extrabold mb-2 text-center text-yellow-300 drop-shadow-lg">
//         Books by Dr Kashish Sheth
//       </h1>
//       <p className="text-lg text-yellow-100 text-center mb-8">
//         Explore my published works, guides, and stories.
//       </p>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
//         {tempBooks.map(book => (
//           <div
//             key={book.id}
//             className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-between"
//           >
//             <img
//               src={book.image}
//               alt={book.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-6 flex flex-col gap-3 flex-grow">
//               <span className="text-xs font-semibold text-yellow-200 uppercase">
//                 {book.category}
//               </span>
//               <h2 className="text-2xl font-bold text-white">{book.title}</h2>
//               <p className="text-sm text-gray-200">by {book.author}</p>
//               <p className="text-gray-300 text-sm mt-2 flex-grow">{book.summary}</p>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {book.tags?.map(tag => (
//                   <span
//                     key={tag}
//                     className="text-xs bg-yellow-300/20 text-yellow-200 px-2 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Book;
// import React, { useState, useEffect } from "react";
// import type { Book } from "../types/book"; // updated type with buyLink
// import placeholder from "../assets/react.svg"; // fallback image

// const Books: React.FC = () => {
//   const [books, setBooks] = useState<Book[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/books") // backend endpoint
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error("Failed to fetch books:", err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       <h1 className="text-5xl font-extrabold mb-2 text-center text-yellow-300 drop-shadow-lg">
//         Books by Dr Kashish Sheth
//       </h1>
//       <p className="text-lg text-yellow-100 text-center mb-8">
//         Explore my published works, guides, and stories.
//       </p>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
//         {books.map((book) => (
//           <div
//             key={ book._id} // use id or MongoDB _id
//             className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-between"
//           >
//             <img
//               src={book.image || placeholder}
//               alt={book.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-6 flex flex-col gap-3 flex-grow">
//               <span className="text-xs font-semibold text-yellow-200 uppercase">
//                 {book.category}
//               </span>
//               <h2 className="text-2xl font-bold text-white">{book.title}</h2>
//               <p className="text-sm text-gray-200">by {book.author}</p>
//               <p className="text-gray-300 text-sm mt-2 flex-grow">{book.summary}</p>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {book.tags?.map((tag) => (
//                   <span
//                     key={tag}
//                     className="text-xs bg-yellow-300/20 text-yellow-200 px-2 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 href={book.buyLink || "#"} // dynamic Buy Now link
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300 inline-block text-center"
//               >
//                 Buy Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;



import React, { useState, useEffect } from "react";
import type { Book } from "../types/book";
import placeholder from "../assets/react.svg";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(() => setError("Failed to fetch books"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Loading books...</p>;
  if (error) return <p className="text-red-400 text-center mt-10">{error}</p>;

  // ✅ Group books by category
  const groupedBooks = books.reduce<Record<string, Book[]>>((acc, book) => {
    const category = (book.category || "UNCATEGORIZED").toUpperCase();
    if (!acc[category]) acc[category] = [];
    acc[category].push(book);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">

      {Object.entries(groupedBooks).map(([category, booksInCategory]) => (
        <div key={category} className="w-full max-w-7xl mb-16">
          {/* Category Name as Section Heading */}
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center uppercase">
            {category}
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {booksInCategory.map((book) => (
              <div
                key={book._id}
                className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-between"
              >
                <img
                  src={book.image || placeholder}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="text-xs font-semibold text-yellow-200 uppercase">
                    {book.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{book.title}</h2>
                  <p className="text-sm text-gray-200">by {book.author}</p>
                  <p className="text-gray-300 text-sm mt-2 flex-grow">{book.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-yellow-300/20 text-yellow-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={book.buyLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300 inline-block text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
