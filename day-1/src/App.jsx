import "./App.css";

function App() {
  // Button Functions
  const handleContact = () => {
    window.location.href = "mailto:example@gmail.com";
  };

  const handleHire = () => {
    alert("Thank you for your interest! I will contact you soon.");
  };

  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank"); // Place cv.pdf inside the public folder
  };

  const handleLearnMore = (service) => {
    alert(`You clicked on ${service}. More details coming soon!`);
  };

  const handleViewProfile = () => {
    alert("Welcome to my profile!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide">
          My<span className="text-cyan-400">Portfolio</span>
        </h1>

        <button
          onClick={handleContact}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Contact Me
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h2 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-cyan-400">Saman Zulfiqar</span>
          </h2>

          <h3 className="text-2xl mt-5 text-gray-300">
            React & Frontend Developer
          </h3>

          <p className="text-gray-400 mt-6 leading-8">
            I create responsive, modern and user-friendly websites using
            React.js, Tailwind CSS, HTML, CSS and JavaScript.
          </p>

          <div className="mt-8 flex gap-5">
            <button
              onClick={handleHire}
              className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg font-semibold"
            >
              Hire Me
            </button>

            <button
              onClick={handleDownloadCV}
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-7 py-3 rounded-lg font-semibold"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 w-80">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
              alt="Profile"
              className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-cyan-400"
            />

            <h2 className="text-3xl font-bold mt-6 text-center">
              Saman Zulfiqar
            </h2>

            <p className="text-cyan-300 text-center mt-2">
              Frontend Developer
            </p>

            <div className="mt-6 space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>📧 Email</span>
                <span>example@gmail.com</span>
              </div>

              <div className="flex justify-between">
                <span>📱 Phone</span>
                <span>+92 300 1234567</span>
              </div>

              <div className="flex justify-between">
                <span>📍 Location</span>
                <span>Rawalpindi</span>
              </div>
            </div>

            <button
              onClick={handleViewProfile}
              className="w-full mt-7 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-bold"
            >
              View Profile
            </button>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:scale-105 transition shadow-xl">
            <div className="text-5xl mb-5">💻</div>

            <h3 className="text-2xl font-bold mb-3">
              Web Development
            </h3>

            <p className="text-gray-300">
              Modern responsive websites using React and Tailwind CSS.
            </p>

            <button
              onClick={() => handleLearnMore("Web Development")}
              className="mt-6 bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
            >
              Learn More
            </button>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:scale-105 transition shadow-xl">
            <div className="text-5xl mb-5">🎨</div>

            <h3 className="text-2xl font-bold mb-3">
              UI / UX Design
            </h3>

            <p className="text-gray-300">
              Attractive and user-friendly interface designs.
            </p>

            <button
              onClick={() => handleLearnMore("UI / UX Design")}
              className="mt-6 bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
            >
              Learn More
            </button>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:scale-105 transition shadow-xl">
            <div className="text-5xl mb-5">🚀</div>

            <h3 className="text-2xl font-bold mb-3">
              Performance
            </h3>

            <p className="text-gray-300">
              Fast, optimized and SEO-friendly web applications.
            </p>

            <button
              onClick={() => handleLearnMore("Performance")}
              className="mt-6 bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
            >
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-8 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "Responsive Design",
            "UI Design",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/10 rounded-xl py-6 text-center hover:bg-cyan-500 transition font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-gray-400">
        © 2026 Saman Zulfiqar | React Portfolio | Tailwind CSS
      </footer>

    </div>
  );
}

export default App;