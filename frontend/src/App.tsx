// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import About from "./pages/About";
// import Books from "./pages/Book";
// import Blogs from "./pages/Blog";
// import Admin from "./pages/Admin";
// import BlogDetail from "./pages/BlogDetail";
// import EditSingleBlog from "./pages/EditSingleBlog";
// import EditSingleBook from "./pages/EditSingleBook";
// export default function App() {
//   return (
//     <Router>
//       <nav className="fixed top-0 w-full h-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 z-50 px-8 flex items-center">
//         <div className="flex justify-end w-full gap-8 text-lg font-medium">
//           <NavLink
//             to="/blogs"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "underline text-yellow-300" : "text-white"}`
//             }
//           >
//             Blogs
//           </NavLink>
//           <NavLink
//             to="/books"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "underline text-yellow-300" : "text-white"}`
//             }
//           >
//             Books
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "underline text-yellow-300" : "text-white"}`
//             }
//           >
//             About Me
//           </NavLink>
//         </div>
//       </nav>

//       <div className="pt-16 px-0 min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
//         <Routes>
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/books" element={<Books />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/admin" element={<Admin />} />
//            <Route path="/blog/:id" element={<BlogDetail />} />
//            <Route path="/edit-blog/:id" element={<EditSingleBlog />} />
//           <Route path="/edit-book/:id" element={<EditSingleBook />} />

//           <Route path="*" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
//   useLocation,
// } from "react-router-dom";
// import { useEffect, useState } from "react";

// import About from "./pages/About";
// import Books from "./pages/Book";
// import Blogs from "./pages/Blog";
// import Admin from "./pages/Admin";
// import BlogDetail from "./pages/BlogDetail";
// import EditSingleBlog from "./pages/EditSingleBlog";
// import EditSingleBook from "./pages/EditSingleBook";
// import BookForm from "./pages/BookForm";
// import EditBlog from "./pages/EditBlog";
// import EditBook from "./pages/EditBook";
// import BlogForm from "./pages/BlogFormat";


// function NavigationBar() {
//   const location = useLocation();
//   const path = location.pathname;

//   const headingBaseClasses =
//     "font-extrabold text-yellow-300 text-center drop-shadow-lg";

//   let centerHeading = null;

//   if (path === "/books") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
//           Books by Dr Kashish Sheth
//         </h1>
        
//       </div>
//     );
//   } else if (path.startsWith("/blog/")) {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
//          MY BLOG
//         </h1>
//       </div>
//     );
//   } else if (path === "/blogs") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
//           MY BLOGS
//         </h1>
//       </div>
//     );
//   } else if (path === "/admin") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
//           Admin Dashboard
//         </h1>
//       </div>
//     );
//   } else if (path === "/admin/blog") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
//           Write a Blog ✍️
//         </h1>
        
//       </div>
//     );
//   } else if (path === "/admin/book") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
//           Publish a Book 📚
//         </h1>
      
//       </div>
//     );
//   } else if (path === "/admin/edit-blog") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
//           Edit Blog ✍️
//         </h1>
       
//       </div>
//     );
//   } else if (path === "/admin/edit-book") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
//           Edit Books
//         </h1>
     
//       </div>
//     );
//   } else if (path === "/admin/profile") {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
//           Profile Settings
//         </h1>
//       </div>
//     );
//   } else if (path.startsWith("/edit-blog/")) {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
//           Edit Blog ✍️
//         </h1>
     
//       </div>
//     );
//   } else if (path.startsWith("/edit-book/")) {
//     centerHeading = (
//       <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//         <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
//           Edit Book ✏️
//         </h1>
       
//       </div>
//     );
//   }

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 px-8 py-10 ">
//       <div className="relative flex items-center justify-center">
//         {centerHeading}
//         <div className="ml-auto flex gap-8 text-lg font-medium">
//           <NavLink
//             to="/blogs"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${
//                 isActive ? "underline text-yellow-300" : "text-white"
//               }`
//             }
//           >
//             Blogs
//           </NavLink>
//           <NavLink
//             to="/books"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${
//                 isActive ? "underline text-yellow-300" : "text-white"
//               }`
//             }
//           >
//             Books
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${
//                 isActive ? "underline text-yellow-300" : "text-white"
//               }`
//             }
//           >
//             About Me
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }


// export default function App() {
//   return (
//     <Router>
//       <NavigationBar />

//       {/* Add padding to offset nav height */}
//       <div className="pt-36 px-0 min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
//         <Routes>
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/books" element={<Books />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/blog/:id" element={<BlogDetail />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/admin/blog" element={<BlogForm />} />
//           <Route path="/admin/book" element={<BookForm />} />
//           <Route path="/admin/edit-blog" element={<EditBlog />} />
//           <Route path="/admin/edit-book" element={<EditBook />} />
//           <Route path="/edit-book/:id" element={<EditSingleBook />} />
//           <Route path="/edit-blog/:id" element={<EditSingleBlog />} />
//           <Route path="*" element={<About />} />
//           <Route
//             path="/admin/profile"
//             element={
//               <div className="p-6 text-center bg-white/10 rounded-lg">
//                 <h2 className="text-xl">👤 Profile Edit Coming Soon...</h2>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }




import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase"; // Adjust path if needed
import { onAuthStateChanged, signOut } from "firebase/auth";

// Pages
import About from "./pages/About";
import Books from "./pages/Book";
import Blogs from "./pages/Blog";
import Admin from "./pages/Admin";
import BlogDetail from "./pages/BlogDetail";
import EditSingleBlog from "./pages/EditSingleBlog";
import EditSingleBook from "./pages/EditSingleBook";
import BookForm from "./pages/BookForm";
import EditBlog from "./pages/EditBlog";
import EditBook from "./pages/EditBook";
import BlogForm from "./pages/BlogFormat";

// NavigationBar Component
function NavigationBar() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Track login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redirect to admin login after logout
  };

  const headingBaseClasses =
    "font-extrabold text-yellow-300 text-center drop-shadow-lg";

  let centerHeading = null;

  // Dynamic page headings
  if (path === "/books") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
          Books by Dr Kashish Sheth
        </h1>
      </div>
    );
  } else if (path.startsWith("/blog/")) {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
          MY BLOG
        </h1>
      </div>
    );
  } else if (path === "/blogs") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
          MY BLOGS
        </h1>
      </div>
    );
  } else if (path === "/admin") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
          Admin Dashboard
        </h1>
      </div>
    );
  } else if (path === "/admin/blog") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
          Write a Blog ✍️
        </h1>
      </div>
    );
  } else if (path === "/admin/book") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
          Publish a Book 📚
        </h1>
      </div>
    );
  } else if (path === "/admin/edit-blog") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
          Edit Blog ✍️
        </h1>
      </div>
    );
  } else if (path === "/admin/edit-book") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
          Edit Books
        </h1>
      </div>
    );
  } else if (path === "/admin/profile") {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-2xl md:text-5xl`}>
          Profile Settings
        </h1>
      </div>
    );
  } else if (path.startsWith("/admin/edit-blog/")) {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
          Edit Blog ✍️
        </h1>
      </div>
    );
  } else if (path.startsWith("/admin/edit-book/")) {
    centerHeading = (
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className={`${headingBaseClasses} text-5xl mb-2`}>
          Edit Book ✏️
        </h1>
      </div>
    );
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 px-8 py-10">
      <div className="relative flex items-center justify-center">
        {centerHeading}

     
        {/* Nav links + logout button */}
        <div className="ml-auto flex gap-6 items-center text-lg font-medium">
           {/* Admin Button - visible only on logged in  */}
          {isLoggedIn && (
            <NavLink
            to="/admin"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "underline text-yellow-300" : "text-white"
              }`
            }
          >
           Dashboard
          </NavLink>
          )}
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "underline text-yellow-300" : "text-white"
              }`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "underline text-yellow-300" : "text-white"
              }`
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "underline text-yellow-300" : "text-white"
              }`
            }
          >
            About Me
          </NavLink>

          {/* Logout Button - visible only on logged in */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-md font-semibold text-sm transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <NavigationBar />

      {/* Padding to offset navbar height */}
      <div className="pt-36 px-0 min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/admin/blog" element={<BlogForm />} />
          <Route path="/admin/book" element={<BookForm />} />
          <Route path="/admin/edit-blog" element={<EditBlog />} />
          <Route path="/admin/edit-book" element={<EditBook />} />
          <Route path="/admin/edit-book/:id" element={<EditSingleBook />} />
          <Route path="admin/edit-blog/:id" element={<EditSingleBlog />} />
          <Route path="*" element={<About />} />
          <Route
            path="/admin/profile"
            element={
              <div className="p-6 text-center bg-white/10 rounded-lg">
                <h2 className="text-xl">👤 Profile Edit Coming Soon...</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
