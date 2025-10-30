import React from 'react';

export const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const colors: Record<string, string> = {
    Travel: "bg-yellow-200 text-yellow-800",
    Food: "bg-red-200 text-red-800",
    Personal: "bg-green-200 text-green-800",
    Lifestyle: "bg-purple-200 text-purple-800",
    Creative: "bg-blue-200 text-blue-800"
  };

  const style = colors[category] || "bg-gray-200 text-gray-800";

  return (
    <span className={`text-sm font-semibold px-2 py-1 rounded ${style}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;

