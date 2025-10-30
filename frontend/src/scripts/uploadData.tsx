import React, { useEffect } from "react";
import { tempBlogs } from "../data/tempBlogs";
import { tempBooks } from "../data/tempBooks";
import { storeBlog, storeBook } from "../firebase/firebaseHelpers";

const UploadData: React.FC = () => {
  useEffect(() => {
    const uploadAll = async () => {
      for (const blog of tempBlogs) {
        await storeBlog(blog);
      }
      for (const book of tempBooks) {
        await storeBook(book);
      }
      console.log("All data uploaded!");
    };
    uploadAll();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-yellow-300">
      Uploading Data... Check console.
    </div>
  );
};

export default UploadData;
