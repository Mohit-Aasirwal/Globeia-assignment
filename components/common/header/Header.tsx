import React from "react";

const Header = () => {
  return (
    <section className="flex flex-row justify-center mb-10 py-4 items-center w-full bg-slate-400/20">
      <div className="flex flex-row w-[80%] mx-auto justify-between items-center">
        <h1>Blog App</h1>
        <div className="flex flex-row space-x-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
