import React, { useState } from "react";

const Search = ({
  blogs,
  categories,
}: {
  blogs: { id: number; title: string; category: string }[];
  categories?: string[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  // Filter blogs based on the search term and selected categories
  const filteredBlogs = blogs.filter((blog) => {
    const matchesTitle = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.size === 0 || selectedCategories.has(blog.category);
    return matchesTitle && matchesCategory;
  });

  const handleCategoryChange = (category) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
  };

  return (
    <div className="rounded-md border border-gray-200 p-5">
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-semibold">Search</h2>
        <label className="input input-bordered flex items-center gap-2 rounded-md bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          className="flex w-full flex-row items-center justify-between"
        >
          <h2 className="text-xl font-semibold">Category</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="h-4 w-4"
          >
            <path d={`M4 ${categoriesOpen ? "10 L12 2" : "2 L12 10"}`} />
          </svg>
        </button>
        {!categoriesOpen && (
          <div className="flex flex-col space-y-2">
            {categories?.map((category) => (
              <label
                key={category}
                className="flex w-fit cursor-pointer select-none flex-row items-center justify-start space-x-2"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.has(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="checkbox-info checkbox checkbox-sm rounded-sm border-blue-700 [--chkbg:theme(colors.blue.700)] [--chkfg:white] checked:border-blue-700"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold">Results</h3>
        <ul className="space-y-2">
          {filteredBlogs.slice(0, 10).map((blog) => (
            <li key={blog.id} className="text-gray-700">
              {blog.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
