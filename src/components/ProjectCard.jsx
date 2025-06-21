import React from 'react';

export default function ProjectCard({ title, image, description, link }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-200 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Title */}
          <h3 className="text-xl md:text-xl font-bold text-white mb-3 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block 
              bg-blue-600 hover:bg-blue-500 
              text-white font-medium 
              px-5 py-2 
              rounded-md 
              transition
            "
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
