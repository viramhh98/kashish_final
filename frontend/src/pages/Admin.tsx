// import React, { useState, useEffect } from "react";
// import { auth } from "../firebase";
// import { 
//   signInWithEmailAndPassword, 
//   onAuthStateChanged, 
//   signOut, 
//   type User as FirebaseUser 
// } from "firebase/auth";
// import BlogForm from "./BlogFormat";

// export default function Admin() {
//   const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle admin login
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setError("");
//     } catch (err: any) {
//       // Show cleaner error messages
//       if (err.code === "auth/user-not-found") setError("No account found with this email.");
//       else if (err.code === "auth/wrong-password") setError("Incorrect password. Try again.");
//       else setError("Login failed. Please check your credentials.");
//     }
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-12 px-6 text-white">
//       {!user ? (
//         // Login Form
//         <div className="bg-black/30 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">
//           <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
//             Admin Login
//           </h1>
//           <form onSubmit={handleLogin} className="flex flex-col gap-4">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       ) : (
//         // Blog Form + Dashboard
//         <div className="w-full max-w-4xl flex flex-col gap-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold  text-yellow-300">Admin Dashboard</h1>
//              </div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition transform"
//             >
//               Logout
//             </button>
//           </div>
//           <BlogForm />
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { auth } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   type User as FirebaseUser,
// } from "firebase/auth";
// import BlogForm from "./BlogFormat";
// import BookForm from "./BookForm";  // 👉 create later

// export default function Admin() {
//   const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [activePage, setActivePage] = useState<
//     "menu" | "blog" | "book" | "profile"
//   >("menu");

//   // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle login
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setError("");
//     } catch (err: any) {
//       if (err.code === "auth/user-not-found")
//         setError("No account found with this email.");
//       else if (err.code === "auth/wrong-password")
//         setError("Incorrect password. Try again.");
//       else setError("Login failed. Please check your credentials.");
//     }
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     setActivePage("menu");
//   };

//   return (
//    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-12 flex flex-col items-center">
//   {!user ? (
//     // Login Form
//     <div className="flex justify-center items-center w-full">
//       <div className="bg-black/30 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">
//         <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
//           Admin Login
//         </h1>
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             required
//           />
//           {error && (
//             <p className="text-red-400 text-sm text-center">{error}</p>
//           )}
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition transform"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   ) : (
//     // Dashboard
//     <div className="w-full max-w-5xl flex flex-col gap-6">
//       {/* Heading + Logout */}
//       <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
//         <h1 className="text-3xl font-bold text-yellow-300 text-center sm:text-left">
//           Admin Dashboard
//         </h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition transform"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Menu */}
//       {activePage === "menu" && (
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 w-full">
//           <div
//             onClick={() => setActivePage("blog")}
//             className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-300 hover:bg-white/20 hover:scale-105 transition transform"
//           >
//             ✍️
//             <span className="mt-2">Write Blog</span>
//           </div>

//           <div
//             onClick={() => setActivePage("book")}
//             className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-300 hover:bg-white/20 hover:scale-105 transition transform"
//           >
//             📚
//             <span className="mt-2">Publish Book</span>
//           </div>

//           <div
//             onClick={() => setActivePage("profile")}
//             className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-purple-300 hover:bg-white/20 hover:scale-105 transition transform"
//           >
//             👤
//             <span className="mt-2">Edit Profile</span>
//           </div>
//         </div>
//       )}

//       {/* Pages */}
//       {activePage === "blog" && <BlogForm />}
//     {activePage === "book" && <BookForm />}
//       {activePage === "profile" && (
//         <div className="p-6 text-center bg-white/10 rounded-lg">
//           <h2 className="text-xl">👤 Profile Edit Coming Soon...</h2>
//         </div>
//       )}

//       {/* Back Button */}
//       {activePage !== "menu" && (
//         <button
//           onClick={() => setActivePage("menu")}
//           className="mt-4 bg-gray-700 px-4 py-2 rounded-lg hover:scale-105 transition"
//         >
//           ⬅️ Back to Dashboard
//         </button>
//       )}
//     </div>
//   )}
// </div>

//   );
// }



// import React, { useState, useEffect } from "react";
// import { auth } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   type User as FirebaseUser,
// } from "firebase/auth";
// import BlogForm from "./BlogFormat";
// import BookForm from "./BookForm"; 
// import EditBlog from "./EditBlog";
// import EditBook from "./EditBook";
// export default function Admin() {
//   const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [activePage, setActivePage] = useState<
//     "menu" | "blog" | "book" | "profile" | "editBlog" | "editBook"
//   >("menu");

//   // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle login
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setError("");
//     } catch (err: any) {
//       if (err.code === "auth/user-not-found")
//         setError("No account found with this email.");
//       else if (err.code === "auth/wrong-password")
//         setError("Incorrect password. Try again.");
//       else setError("Login failed. Please check your credentials.");
//     }
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     setActivePage("menu");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-12 flex flex-col items-center">
//       {!user ? (
//         // Login Form
//         <div className="flex justify-center items-center w-full">
//           <div className="bg-black/30 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">
//             <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
//               Admin Login
//             </h1>
//             <form onSubmit={handleLogin} className="flex flex-col gap-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 required
//               />
//               {error && (
//                 <p className="text-red-400 text-sm text-center">{error}</p>
//               )}
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition transform"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         // Dashboard
//         <div className="w-full max-w-5xl flex flex-col gap-6">
//           {/* Heading + Logout */}
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
//             <h1 className="text-3xl font-bold text-yellow-300 text-center sm:text-left">
//               Admin Dashboard
//             </h1>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition transform"
//             >
//               Logout
//             </button>
//           </div>

//           {/* Menu */}
//           {activePage === "menu" && (
//             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 w-full">
//               <div
//                 onClick={() => setActivePage("blog")}
//                 className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-300 hover:bg-white/20 hover:scale-105 transition transform"
//               >
//                 ✍️
//                 <span className="mt-2">Write Blog</span>
//               </div>

//               <div
//                 onClick={() => setActivePage("book")}
//                 className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-300 hover:bg-white/20 hover:scale-105 transition transform"
//               >
//                 📚
//                 <span className="mt-2">Publish Book</span>
//               </div>

//               <div
//                 onClick={() => setActivePage("editBlog")}
//                 className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-500 hover:bg-white/20 hover:scale-105 transition transform"
//               >
//                 📝
//                 <span className="mt-2">Edit Blogs</span>
//               </div>

//               <div
//                 onClick={() => setActivePage("editBook")}
//                 className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-500 hover:bg-white/20 hover:scale-105 transition transform"
//               >
//                 📖
//                 <span className="mt-2">Edit Books</span>
//               </div>

//               <div
//                 onClick={() => setActivePage("profile")}
//                 className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-purple-300 hover:bg-white/20 hover:scale-105 transition transform"
//               >
//                 👤
//                 <span className="mt-2">Edit Profile</span>
//               </div>
//             </div>
//           )}

//           {/* Pages */}
//           {activePage === "blog" && <BlogForm />}
//           {activePage === "book" && <BookForm />}
//           {activePage === "editBlog" && <EditBlog />}

//           {activePage === "editBook" && <EditBook />}
//           {activePage === "profile" && (
//             <div className="p-6 text-center bg-white/10 rounded-lg">
//               <h2 className="text-xl">👤 Profile Edit Coming Soon...</h2>
//             </div>
//           )}

//           {/* Back Button */}
//           {activePage !== "menu" && (
//             <button
//               onClick={() => setActivePage("menu")}
//               className="mt-4 bg-gray-700 px-4 py-2 rounded-lg hover:scale-105 transition"
//             >
//               ⬅️ Back to Dashboard
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   type User as FirebaseUser,
// } from "firebase/auth";

// export default function Admin() {
//   const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle login
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setError("");
//     } catch (err: any) {
//       if (err.code === "auth/user-not-found")
//         setError("No account found with this email.");
//       else if (err.code === "auth/wrong-password")
//         setError("Incorrect password. Try again.");
//       else setError("Login failed. Please check your credentials.");
//     }
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/admin");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-12 flex flex-col items-center">
//       {!user ? (
//         // Login Form
//         <div className="flex justify-center items-center w-full">
//           <div className="bg-black/30 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">
//             <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
//               Admin Login
//             </h1>
//             <form onSubmit={handleLogin} className="flex flex-col gap-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 required
//               />
//               {error && (
//                 <p className="text-red-400 text-sm text-center">{error}</p>
//               )}
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition transform"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         // Dashboard
//         <div className="w-full max-w-5xl flex flex-col gap-6">
//           {/* Heading + Logout */}
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
//             <h1 className="text-3xl font-bold text-yellow-300 text-center sm:text-left">
//               Admin Dashboard
//             </h1>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition transform"
//             >
//               Logout
//             </button>
//           </div>

//           {/* Menu Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 w-full">
//             <div
//               onClick={() => navigate("/admin/blog")}
//               className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-300 hover:bg-white/20 hover:scale-105 transition transform"
//             >
//               ✍️
//               <span className="mt-2">Write Blog</span>
//             </div>

//             <div
//               onClick={() => navigate("/admin/book")}
//               className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-300 hover:bg-white/20 hover:scale-105 transition transform"
//             >
//               📚
//               <span className="mt-2">Publish Book</span>
//             </div>

//             <div
//               onClick={() => navigate("/admin/edit-blog")}
//               className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-500 hover:bg-white/20 hover:scale-105 transition transform"
//             >
//               📝
//               <span className="mt-2">Edit Blogs</span>
//             </div>

//             <div
//               onClick={() => navigate("/admin/edit-book")}
//               className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-500 hover:bg-white/20 hover:scale-105 transition transform"
//             >
//               📖
//               <span className="mt-2">Edit Books</span>
//             </div>

//             <div
//               onClick={() => navigate("/admin/profile")}
//               className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-purple-300 hover:bg-white/20 hover:scale-105 transition transform"
//             >
//               👤
//               <span className="mt-2">Edit Profile</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  type User as FirebaseUser,
} from "firebase/auth";

export default function Admin() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err: any) {
      if (err.code === "auth/user-not-found")
        setError("No account found with this email.");
      else if (err.code === "auth/wrong-password")
        setError("Incorrect password. Try again.");
      else setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-12 flex flex-col items-center">
      {!user ? (
        // Login Form
        <div className="flex justify-center items-center w-full">
          <div className="bg-black/30 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
              Admin Login
            </h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition transform"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        // Admin Dashboard Menu Cards
        <div className="w-full max-w-5xl flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 w-full">
            <div
              onClick={() => navigate("/admin/blog")}
              className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-300 hover:bg-white/20 hover:scale-105 transition transform"
            >
              ✍️
              <span className="mt-2">Write Blog</span>
            </div>

            <div
              onClick={() => navigate("/admin/book")}
              className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-300 hover:bg-white/20 hover:scale-105 transition transform"
            >
              📚
              <span className="mt-2">Publish Book</span>
            </div>

            <div
              onClick={() => navigate("/admin/edit-blog")}
              className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-green-500 hover:bg-white/20 hover:scale-105 transition transform"
            >
              📝
              <span className="mt-2">Edit Blogs</span>
            </div>

            <div
              onClick={() => navigate("/admin/edit-book")}
              className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-blue-500 hover:bg-white/20 hover:scale-105 transition transform"
            >
              📖
              <span className="mt-2">Edit Books</span>
            </div>

            <div
              onClick={() => navigate("/admin/profile")}
              className="cursor-pointer bg-white/10 rounded-xl h-40 flex flex-col items-center justify-center text-2xl font-bold text-purple-300 hover:bg-white/20 hover:scale-105 transition transform"
            >
              👤
              <span className="mt-2">Edit Profile</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
