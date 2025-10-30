export type Book = {
  _id: string;
  title: string;
  date?: string;
  author: string;
  summary: string;
  category?: string;
  image?: string;
  tags?: string[];
  buyLink?: string; // ✅ added field for Buy Now URL
};
