import profileImg from "../assets/profile.png"; // ✅ adjust path if needed

export default function About() {
  return (
    <>

      <div className="top-0 min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-8 px-6">
        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-lg border z-50 border-white/20 shadow-xl rounded-2xl p-8 max-w-3xl w-full text-center text-white">
          <img
            src={profileImg}
            alt="Profile"
            className="w-50 h-50 rounded-full mx-auto border-4 border-blue-500 shadow-md"
          />
        <h1 className="text-3xl font-bold mt-4">
  <span className="text-4xl font-serif ">Dr</span> Kashish Sheth
</h1>


          <p className="text-gray-300 mt-2 py-2">
            📍 City, Country | 💻 Java Enthusiast | ✨ Building Ed-Tech Projects
          </p>
        </div>

        {/* Bio Section */}
        <div className="mt-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            About Me
          </h2>
          <p className="text-gray-200 leading-relaxed text-lg text-center">
            Hi 👋, I’m a passionate software developer specializing in Java and
            full-stack web development. I love creating educational technology
            apps that make learning simple and fun. Apart from coding, I enjoy
            reading, teaching, and exploring new tools that improve productivity.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12 max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 shadow-lg rounded-lg">
              Java
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 shadow-lg rounded-lg">
              React
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 shadow-lg rounded-lg">
              Tailwind CSS
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 shadow-lg rounded-lg">
              Firebase
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-300">
            Let’s connect! Feel free to reach out for collaborations, projects, or
            just a friendly chat.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/yourprofile"
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-gray-300 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-300 hover:text-red-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
