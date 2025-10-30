// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";


// const tempBlogs = [
//   {
//     id: "1",
//     title: "Exploring the Alps",
//     summary:
//       "Join me on a breathtaking journey through the Alps, discovering hidden trails and scenic views...",
//     content:
//       "Join me on a breathtaking journey through the Alps, discovering hidden trails, scenic views, and unforgettable adventures. Hiking, climbing, and exploring nature has never been more thrilling. This blog covers everything from preparation tips to the best local spots...",
//     author: "Jane Doe",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "2",
//     title: "Mastering Homemade Pasta",
//     summary:
//       "Learn the art of making fresh pasta from scratch, including traditional sauces...",
//     content:
//       "Learn the art of making fresh pasta from scratch, including traditional sauces and tips for perfect texture and flavor every time. This blog will guide you step by step, making cooking fun and accessible for everyone...",
//     author: "John Smith",
//     image:
//       "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "3",
//     title: "Mindfulness in Daily Life",
//     summary:
//       "Practical techniques to bring mindfulness into your everyday routines...",
//     content:
//       "Practical techniques to bring mindfulness into your everyday routines, helping reduce stress and increase focus and happiness. From morning rituals to evening reflections, learn how to integrate mindful practices seamlessly into your day...",
//     author: "Alex Johnson",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//   },
//  {
//   id: "4",
//   title: "The Role of Doctors in Society",
//   summary:
//     "Doctors are more than healers — they are guides, innovators, and the silent pillars of our daily lives...",
//   content:
//     "When we think of doctors, the first image that comes to mind is someone in a white coat with a stethoscope around their neck. But a doctor is much more than just a medical professional — they are healers, guides, and sometimes even silent companions in our most difficult moments.\n\nDoctors have existed in every era of human civilization. From ancient healers using herbs and rituals to modern physicians with advanced technology and precision, the role of a doctor has always been to bring hope where there is fear, and solutions where there is pain. In many ways, doctors are not just treating illnesses, but restoring confidence and dignity in the lives of people.\n\nEvery society depends on its doctors. A fever, a fracture, or something as complex as heart surgery — doctors are the ones we turn to. Their importance can be understood through three aspects:\n\n1. Preservers of Health: Doctors don’t just treat; they prevent. With regular check-ups, health awareness campaigns, and guidance, they help communities avoid diseases before they even strike.\n\n2. Guides in Uncertainty: Illness is frightening. When our health is at risk, we often feel vulnerable. Doctors, with their calm words and knowledge, guide us through these moments. A reassuring 'you will be fine' from a doctor can sometimes heal faster than the medicine itself.\n\n3. Innovators in Medicine: From developing vaccines to performing complex surgeries, doctors drive innovation. During global crises like the COVID-19 pandemic, it was doctors who stood on the front lines, risking their own lives for the safety of others.\n\nIt’s easy to see doctors as superheroes, but they are human too. They face long working hours, emotional stress, and personal sacrifices. Yet, despite these challenges, they continue to dedicate their lives to others. This selflessness is what makes the profession noble and deeply respected.\n\nIn the end, doctors are not only the protectors of our health but also the guardians of our hope. Their role goes beyond medicine — they embody compassion, courage, and commitment. Society may advance with technology, but it will always need the human touch of a doctor.",
//   author: "Dr. Emily Carter",
//   image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//  }
// ,

// ];


// type Blog = {
//   id: string;
//   title: string;
//   summary?: string;
//   content: string;
//   image?: string;
//   date?: any;
//   author: string;
// };

// export default function BlogDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState<Blog | null>(null);

//   useEffect(() => {
//     if (id) {
//       const found = tempBlogs.find((b) => b.id === id);
//       setBlog(found || null);
//     }
//   }, [id]);

//   if (!blog) return <p className="text-white text-center mt-20">Blog not found.</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       {blog.image && (
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full max-w-3xl h-96 object-cover rounded-2xl mb-6"
//         />
//       )}

//       <h1 className="text-5xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">
//         {blog.title}
//       </h1>
//       <p className="text-xs text-yellow-200 mb-6">by {blog.author}</p>
//       <p className="text-gray-200  max-w-7xl text-2xl mb-12">{blog.content}</p>

//       {/* 👇 Back button placed at the bottom */}
//       <button
//   onClick={() => navigate("/blogs")}
//   className="mt-10 px-8 py-3 rounded-full 
//              bg-gradient-to-r from-yellow-100 via-orange-400 to-pink-500 
//              text-black font-semibold shadow-lg 
//              hover:scale-110 hover:shadow-2xl hover:from-yellow-300 hover:to-pink-600
//              transition-all duration-300 ease-in-out"
// >
//   ← Back to Blogs
// </button>

//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Blog = {
  _id: string;
  title: string;
  summary?: string;
  content: string;
  image?: string;
  date?: any;
  author: string;
};

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog");

        const data: Blog = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
  if (!blog) return <p className="text-white text-center mt-20">Blog not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-3xl h-96 object-cover rounded-2xl mb-6"
        />
      )}

      <h1 className="text-3xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">
        {blog.title}
      </h1>
      <p className="text-3xl text-yellow-200 mb-6">by {blog.author}</p>
    {blog.content.split('\n\n').map((para, index) => (
  <p key={index} className="text-white max-w-7xl text-2xl mb-6">
    {para}
  </p>
))}


      <button
        onClick={() => navigate("/blogs")}
        className="mt-10 px-8 py-3 rounded-full 
                   bg-gradient-to-r from-yellow-100 via-orange-400 to-pink-500 
                   text-black font-semibold shadow-lg 
                   hover:scale-110 hover:shadow-2xl hover:from-yellow-300 hover:to-pink-600
                   transition-all duration-300 ease-in-out"
      >
        ← Back to Blogs
      </button>
    </div>
  );
}



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";

// type Blog = {
//   id: string;
//   title: string;
//   summary?: string;
//   content: string;
//   image?: string;
//   date?: any;
//   author: string;
// };

// export default function BlogDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState<Blog | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       if (!id) return;
//       try {
//         const docRef = doc(db, "blogs", id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setBlog({ id: docSnap.id, ...(docSnap.data() as Omit<Blog, "id">) });
//         } else {
//           console.warn("No such blog!");
//           setBlog(null);
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//         setBlog(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
//   if (!blog) return <p className="text-white text-center mt-20">Blog not found.</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6">
//       {blog.image && (
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full max-w-3xl h-96 object-cover rounded-2xl mb-6"
//         />
//       )}

//       <h1 className="text-5xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">{blog.title}</h1>
//       <p className="text-xs text-yellow-200 mb-6">by {blog.author}</p>
//       <p className="text-gray-200 max-w-3xl text-lg mb-12">{blog.content}</p>

//       <button
//         onClick={() => navigate("/blogs")}
//         className="mt-10 px-8 py-3 rounded-full 
//                    bg-gradient-to-r from-yellow-100 via-orange-400 to-pink-500 
//                    text-black font-semibold shadow-lg 
//                    hover:scale-110 hover:shadow-2xl hover:from-yellow-300 hover:to-pink-600
//                    transition-all duration-300 ease-in-out"
//       >
//         ← Back to Blogs
//       </button>
//     </div>
//   );
// }
