// import React from "react";

// type Blog = {
//   id: number;
//   title: string;
//   date: string;
//   author: string;
//   content: string;
//   tags: string[];
// };

// const sampleBlogs: Blog[] = [
//   {
//     id: 1,
//     title: "Why I Started Blogging",
//     date: "2025-09-25",
//     author: "Dr Kashish Sheth",
//     content:
//       "Blogging allows me to share my thoughts, experiences, and knowledge with the world. It’s also a way to connect with people who share similar passions.",
//     tags: ["Personal", "Journey", "Writing"],
//   },
//   {
//     id: 2,
//     title: "Top 5 Lessons from My Journey",
//     date: "2025-09-20",
//     author: "Dr Kashish Sheth",
//     content:
//       "Through my career, I’ve learned valuable lessons: consistency beats talent, curiosity drives growth, and sharing knowledge is the fastest way to learn.",
//     tags: ["Growth", "Lessons", "Career"],
//   },
// ];

// export default function BlogDisplay() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       {/* Page Title */}
//       <h1 className="text-5xl font-extrabold mb-2 text-center text-yellow-300 drop-shadow-lg">
//         My Blogs
//       </h1>
//       <p className="text-lg text-yellow-100 text-center mb-8">
//         Explore my latest blogs and stories.
//       </p>

//       {/* Blogs Grid */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
//         {sampleBlogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-between p-6"
//           >
//             <span className="text-xs font-semibold text-yellow-200 uppercase">
//               {blog.date}
//             </span>
//             <h2 className="text-2xl font-bold text-white mt-2">{blog.title}</h2>
//             <p className="text-sm text-gray-300 mt-1">by {blog.author}</p>
//             <p className="text-gray-200 text-sm mt-4 flex-grow">
//               {blog.content}
//             </p>

//             {/* Tags */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               {blog.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="text-xs bg-yellow-300/20 text-yellow-200 px-2 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Read More (future expansion) */}
//             <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300">
//               Read More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// type Blog = {
//   id: string;
//   title: string;
//   summary: string;
//   content: string;
//   image?: string;
//   date?: any;
//   author: string;
// };

// const tempBlogs: Blog[] = [
//   {
//     id: "1",
//     title: "Exploring the Alps",
//     summary: "Join me on a breathtaking journey through the Alps, discovering hidden trails and scenic views...",
//     content: "Join me on a breathtaking journey through the Alps, discovering hidden trails, scenic views, and unforgettable adventures. Hiking, climbing, and exploring nature has never been more thrilling. This blog covers everything from preparation tips to the best local spots...",
//     author: "Jane Doe",
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "2",
//     title: "Mastering Homemade Pasta",
//     summary: "Learn the art of making fresh pasta from scratch, including traditional sauces...",
//     content: "Learn the art of making fresh pasta from scratch, including traditional sauces and tips for perfect texture and flavor every time. This blog will guide you step by step, making cooking fun and accessible for everyone...",
//     author: "John Smith",
//     image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "3",
//     title: "Mindfulness in Daily Life",
//     summary: "Practical techniques to bring mindfulness into your everyday routines...",
//     content: "Practical techniques to bring mindfulness into your everyday routines, helping reduce stress and increase focus and happiness. From morning rituals to evening reflections, learn how to integrate mindful practices seamlessly into your day...",
//     author: "Alex Johnson",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//   },
//  {
//   id: "4",
//   title: "The Role of Doctors in Society",
//   summary:
//     "Doctors are more than healers — they are guides, innovators, and the silent pillars of our daily lives...",
//   content:
//     "When we think of doctors, the first image that comes to mind is someone in a white coat with a stethoscope around their neck. But a doctor is much more than just a medical professional — they are healers, guides, and sometimes even silent companions in our most difficult moments.\n\nDoctors have existed in every era of human civilization. From ancient healers using herbs and rituals to modern physicians with advanced technology and precision, the role of a doctor has always been to bring hope where there is fear, and solutions where there is pain. In many ways, doctors are not just treating illnesses, but restoring confidence and dignity in the lives of people.\n\nEvery society depends on its doctors. A fever, a fracture, or something as complex as heart surgery — doctors are the ones we turn to. Their importance can be understood through three aspects:\n\n1. Preservers of Health: Doctors don’t just treat; they prevent. With regular check-ups, health awareness campaigns, and guidance, they help communities avoid diseases before they even strike.\n\n2. Guides in Uncertainty: Illness is frightening. When our health is at risk, we often feel vulnerable. Doctors, with their calm words and knowledge, guide us through these moments. A reassuring 'you will be fine' from a doctor can sometimes heal faster than the medicine itself.\n\n3. Innovators in Medicine: From developing vaccines to performing complex surgeries, doctors drive innovation. During global crises like the COVID-19 pandemic, it was doctors who stood on the front lines, risking their own lives for the safety of others.\n\nIt’s easy to see doctors as superheroes, but they are human too. They face long working hours, emotional stress, and personal sacrifices. Yet, despite these challenges, they continue to dedicate their lives to others. This selflessness is what makes the profession noble and deeply respected.\n\nIn the end, doctors are not only the protectors of our health but also the guardians of our hope. Their role goes beyond medicine — they embody compassion, courage, and commitment. Society may advance with technology, but it will always need the human touch of a doctor.",
//   author: "Dr. Emily Carter",

//      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//  }
// ,
// ];

// export default function BlogDisplay() {
//   const [blogs, setBlogs] = useState(tempBlogs); // Replace tempBlogs with Firestore fetch later
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       <h1 className="text-5xl font-extrabold mb-8 text-yellow-300 drop-shadow-lg">My Blogs</h1>

//       <div className="flex flex-col w-full max-w-5xl gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row gap-4 hover:scale-105 transition transform cursor-pointer"
//             onClick={() => navigate(`/blog/${blog.id}`)}
//           >
//             {blog.image && (
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
//               />
//             )}
//             <div className="flex flex-col p-6 gap-3 flex-1">
//               <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
//               <p className="text-gray-200 line-clamp-3">{blog.summary}</p>
//               <p className="text-xs text-yellow-200 mt-2">by {blog.author}</p>
//               <button className="mt-2 text-yellow-400 hover:underline text-sm">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { collection, getDocs, query, orderBy } from "firebase/firestore";

// type Blog = {
//   id: string;
//   title: string;
//   summary: string;
//   content: string;
//   image?: string;
//   date?: any;
//   author: string;
// };

// export default function BlogDisplay() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const q = query(collection(db, "blogs"), orderBy("date", "desc"));
//         const querySnapshot = await getDocs(q);
//         const blogsData: Blog[] = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...(doc.data() as Omit<Blog, "id">),
//         }));
//         setBlogs(blogsData);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
//   if (blogs.length === 0)
//     return <p className="text-white text-center mt-20">No blogs found.</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       <h1 className="text-5xl font-extrabold mb-8 text-yellow-300 drop-shadow-lg">My Blogs</h1>

//       <div className="flex flex-col w-full max-w-5xl gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row gap-4 hover:scale-105 transition transform cursor-pointer"
//             onClick={() => navigate(`/blog/${blog.id}`)}
//           >
//             {blog.image && (
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
//               />
//             )}
//             <div className="flex flex-col p-6 gap-3 flex-1">
//               <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
//               <p className="text-gray-200 line-clamp-3">{blog.summary}</p>
//               <p className="text-xs text-yellow-200 mt-2">by {blog.author}</p>
//               <button className="mt-2 text-yellow-400 hover:underline text-sm">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// type Blog = {
//   _id: string;
//   title: string;
//   summary: string;
//   content: string;
//   image?: string;
//   date?: any;
//   author: string;
// };

// export default function BlogDisplay() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/blogs");
//         if (!response.ok) throw new Error("Failed to fetch blogs");

//         const data: Blog[] = await response.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       <h1 className="text-5xl font-extrabold mb-8 text-yellow-300 drop-shadow-lg">My Blogs</h1>

//       <div className="flex flex-col w-full max-w-5xl gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row gap-4 hover:scale-105 transition transform cursor-pointer"
//             onClick={() => navigate(`/blog/${blog._id}`)}
//           >
//             {blog.image && (
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
//               />
//             )}
//             <div className="flex flex-col p-6 gap-3 flex-1">
//               <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
//               <p className="text-gray-200 line-clamp-3">{blog.summary}</p>
//               <p className="text-xs text-yellow-200 mt-2">by {blog.author}</p>
//               <button className="mt-2 text-yellow-400 hover:underline text-sm">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


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

export default function BlogDisplay() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
      
      <div className="flex flex-col w-full max-w-5xl gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row gap-4 hover:scale-105 transition transform cursor-pointer"
            onClick={() => navigate(`/blog/${blog._id}`)}
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            )}
            <div className="flex flex-col p-6 gap-3 flex-1">
              <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
              <p className="text-gray-200 line-clamp-3">{blog.summary}</p>
              
            

             {/* Author, Category & Date */}
<p className="text-xl text-yellow-200 mt-1">
  by {blog.author} {blog.category && `| ${blog.category}`} |{" "}
  {blog.date ? new Date(blog.date).toLocaleDateString() : ""}
</p>

{/* Tags as pill boxes */}
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


              <button className="mt-2 text-yellow-400 hover:underline text-sm">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
