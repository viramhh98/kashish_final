import type { Blog } from "../types/blog";

export const tempBlogs: Blog[] = [
  {
    id: "1",
    title: "Exploring the Alps",
    summary: "Join me on a breathtaking journey through the Alps...",
    content: "Join me on a breathtaking journey through the Alps, discovering hidden trails...",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    category: "Travel",
    tags: ["Adventure", "Nature"],
  },
  {
    id: "2",
    title: "Mastering Homemade Pasta",
    summary: "Learn the art of making fresh pasta from scratch...",
    content: "Learn the art of making fresh pasta from scratch, including traditional sauces...",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    category: "Food",
    tags: ["Cooking", "Recipe"],
  },
  {
    id: "3",
    title: "Mindfulness in Daily Life",
    summary: "Practical techniques to bring mindfulness into your routines...",
    content: "Practical techniques to bring mindfulness into your everyday routines...",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    category: "Self-help",
    tags: ["Mindfulness", "Habits"],
  },
];
