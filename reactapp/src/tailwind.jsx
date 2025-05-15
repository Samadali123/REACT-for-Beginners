import React from "react";

const Tailwind = () => {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="max-w-2xl text-center flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">
          Helllooooooo Tailwind CSS
        </h1>
        <p className="text-sm md:text-base font-light text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias culpa? 
          Debitis pariatur velit quam numquam alias hic nisi dolores. Earum, magni corporis?
        </p>
        <button
  className="bg-red-500 hover:bg-green-500 text-white px-4 py-2 rounded-xl transition-colors duration-300"
>
  Explore
</button>
      </div>
    </div>
  );
};

export default Tailwind;
