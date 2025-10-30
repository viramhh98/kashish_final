import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import type { Blog } from "../types/blog";
import type { Book } from "../types/book";

// Store a blog
export const storeBlog = async (blog: Blog) => {
  try {
    await setDoc(doc(db, "blogs", blog.id), blog);
    console.log("Blog stored:", blog.title);
  } catch (err) {
    console.error("Error storing blog:", err);
  }
};

// Store a book
export const storeBook = async (book: Book) => {
  try {
    await setDoc(doc(db, "books", book.id), book);
    console.log("Book stored:", book.title);
  } catch (err) {
    console.error("Error storing book:", err);
  }
};
