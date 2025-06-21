// src/components/Projects.jsx
import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map(p => (
          <div key={p.id} className="max-w-sm mx-auto h-full">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
