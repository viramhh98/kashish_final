import type { Book } from "../types/book";

export const tempBooks: Book[] = [
  {
    id: "1",
    title: "The Mountain Guide",
    date: "2025-09-23",
    author: "Jane Doe",
    summary: "A thrilling adventure guide for mountain explorers.",
    category: "Travel",
    image: "/assets/book1.jpg",
    tags: ["Adventure", "Nature", "Guide"],
  },
  {
    id: "2",
    title: "Pasta Perfection",
    date: "2025-09-22",
    author: "John Smith",
    summary: "Master the art of homemade pasta with this recipe book.",
    category: "Food",
    image: "/assets/book2.jpg",
    tags: ["Cooking", "Italian", "Recipe"],
  },
];
