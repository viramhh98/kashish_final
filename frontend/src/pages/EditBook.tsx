// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import type { Book } from "../types/book";
// import placeholder from "../assets/react.svg";

// const Books: React.FC = () => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const navigate = useNavigate();

//   // Fetch books
//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/books");
//       const data = await res.json();
//       setBooks(data);
//     } catch (err) {
//       console.error("Failed to fetch books:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Delete book
//   const handleDelete = async (id: string) => {
//     if (!window.confirm("Are you sure you want to delete this book?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/books/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) throw new Error("Delete failed");

//       alert("Book deleted successfully!");
//       fetchBooks(); // refresh list
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete book");
//     }
//   };

//   // Navigate to edit page
//   const handleEdit = (id: string) => {
//     navigate(`/edit-book/${id}`);
//   };

//   return (
//     <div className=" flex flex-col items-center py-12 px-6">
//       <h1 className="text-5xl font-extrabold mb-2 text-center text-yellow-300 drop-shadow-lg">
//         Edit Books
//       </h1>
    

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
//         {books.map((book) => (
//           <div
//             key={book._id}
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

//               {/* Edit & Delete Buttons */}
//               <div className="mt-4 flex gap-3">
//                 <button
//                   onClick={() => handleEdit(book._id)}
//                   className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(book._id)}
//                   className="flex-1 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Book } from "../types/book";
import placeholder from "../assets/react.svg";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Delete book
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      alert("Book deleted successfully!");
      fetchBooks(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete book");
    }
  };

  // Navigate to edit page
  const handleEdit = (id: string) => {
    navigate(`/admin/edit-book/${id}`);
  };

  // ✅ Group books by category
  const groupedBooks = books.reduce<Record<string, Book[]>>((acc, book) => {
    const category = (book.category || "UNCATEGORIZED").toUpperCase();
    if (!acc[category]) acc[category] = [];
    acc[category].push(book);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center py-12 px-6 min-h-screen ">
     

      {Object.entries(groupedBooks).map(([category, booksInCategory]) => (
        <div key={category} className="w-full max-w-7xl mb-16">
          {/* Category Title */}
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
                  src={book.image?.trim() ? book.image : placeholder}
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
                    {book.tags?.map((tag, index) => (
                      <span
                        key={`${tag}-${index}`}
                        className="text-xs bg-yellow-300/20 text-yellow-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Edit & Delete Buttons */}
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => handleEdit(book._id)}
                      className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="flex-1 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
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
