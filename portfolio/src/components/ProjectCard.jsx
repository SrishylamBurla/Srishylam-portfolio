import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`group relative bg-black border border-gray-800 rounded-2xl shadow-lg ${project.shadowColor} overflow-hidden 
      w-full max-w-md transition-transform hover:scale-105`}
    >
      {/* --- Front (Default content with image) --- */}
      <div className="transition-opacity duration-500 group-hover:opacity-0">
        <img
          src={project.image}
          alt="Project-img"
          className="w-full h-52 object-cover p-4"
        />
        <div className="p-4 text-white">
          <h2 className="text-2xl font-semibold text-emerald-400 text-center">
            {project.name}
          </h2>
        </div>
      </div>

      {/* Back (Content on hover) */}
      <div
        className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center 
    bg-gradient-to-b from-gray-900 to-black opacity-0 transition-opacity duration-500 
    group-hover:opacity-100 rounded-2xl"
      >
        <h2 className="text-2xl font-semibold text-emerald-400">
          {project.name}
        </h2>

        <p className="text-sm text-gray-300 mt-2">{project.description}</p>

        <p className="mt-3 text-xs text-gray-400">
          <span className="font-bold text-white">TechStack:</span>{" "}
          {project.TechStack}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <a
            href={project.Url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm flex items-center gap-2 
      font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition"
          >
            <FaExternalLinkAlt className="text-white" /> Url
          </a>
          <a
            href={project.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm flex items-center gap-2 
      font-semibold bg-gradient-to-r from-red-400 to-yellow-500 hover:scale-105 transition"
          >
            <FaGithub className="text-white" /> Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
