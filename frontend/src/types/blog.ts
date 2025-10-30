// export interface BlogPost {
//   id: number;
//   title: string;
//   date: string;
//   author: string;
//   summary: string;
//   category: string;  // e.g., "Travel", "Food", "Personal"
//   image?: string;    // optional, can use SVG placeholder
//   tags: string[];
// }


export type Blog = {
  _id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  date?: string;
  author: string;
  category?: string;
  tags?: string[];
};
