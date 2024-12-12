import { useState, useRef } from "react";
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionName: string) => {
    sectionsRef[sectionName].current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionName);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="pl-10 container mx-auto flex justify-between items-center p-4">
          <div className=" max-sm:text-xl max-sm:pr-4 text-2xl font-bold text-purple-600">
            Aniruddha Pathak
          </div>
          <div className="flex space-x-6 navbar_hide">
            {[
              { name: "home", icon: Home },
              { name: "about", icon: User },
              { name: "experience", icon: Briefcase },
              { name: "projects", icon: Code },
              { name: "skills", icon: Award },
              { name: "contact", icon: Mail },
            ].map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => scrollToSection(name)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  activeSection === name
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-100 text-gray-700"
                }`}
              >
                <Icon size={20} />
                <span className="capitalize">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        ref={sectionsRef.home}
        className="max-sm:pt-[120px] max-sm:pb-10 min-h-0 flex items-center justify-center pt-60 p-20 px-4"
      >
        <div className="text-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-purple-400 rounded-full opacity-75 blur-xl pb-10 animate-pulse"></div>
            <img
              src="src/assets/ani-cat.jpeg"
              alt="Aniruddha Pathak"
              className="relative mx-auto w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h1 className=" max-sm:text-3xl text-5xl font-bold mt-6 text-purple-800">
            Aniruddha Pathak
          </h1>
          <p className="max-sm:text-xl text-2xl mt-2 text-gray-600">
            Web Developer & Tech Enthusiast
          </p>
          <div className="mt-6 flex justify-center space-x-4 ">
            <a
              href="mailto:getaniruddha.pathak@gmail.com"
              title="mail"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="src/Aniruddha_Pathak_Resume2024.pdf"
              download
              title="contact"
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionsRef.about}
        className="max-sm:py-10 min-h-0 bg-white/50 backdrop-blur-md flex items-center justify-center p-4 pb-20 pt-20"
      >
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-sm:pt-0 bg-purple-60 p-6 rounded-lg shadow-md hover:bg-purple-100">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Bachelor of Engineering</p>
                  <p className="text-gray-600">
                    Jain College of Engineering and Technology, Hubli
                  </p>
                  <p className="text-sm text-gray-500">2018 - 2022</p>
                </div>
                <div>
                  <p className="font-bold">Pre-university College</p>
                  <p className="text-gray-600">
                    P C Jabin Science College, Hubli
                  </p>
                  <p className="text-sm text-gray-500">2016 - 2018</p>
                </div>
              </div>
            </div>
            <div className="text-gray-700">
              <p className="mb-4 max-sm:mx-[8px]">
                A passionate Web Developer with a strong background in Web
                Development, bringing technical precision and creative
                problem-solving to every project.
              </p>
              <p className="max-sm:mx-[8px]">
                Experienced in developing responsive web applications, designing
                intuitive user interfaces, and delivering high-quality technical
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={sectionsRef.experience}
        className="max-sm:py-10 min-h-0 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center p-4 pb-20 pt-20 "
      >
        <div className="max-w-4xl w-full ">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-800 ">
            Professional Experience
          </h2>
          <div className="space-y-6 ">
            {[
              {
                title: "Web Developer",
                company: "Aghreni Technologies Private Limited",
                duration: "July 2024 - Dec 2024",
                details: [
                  "Developed responsive email templates and landing pages with hand-coded HTML and CSS.",
                  "Improved code efficiency by 20% through best practices.",
                  "Used QA tools like Litmus and Adobe Client Console; designed assets using Adobe Suite.",
                ],
              },
              {
                title: "Business Development Associate",
                company: "Crio.Do",
                duration: "September 2023 - November 2023",
                details: [
                  "Closed deals and onboarded consumers with personalized support.",
                  "Troubleshot customer issues, ensuring high satisfaction.",
                ],
              },
              {
                title: "Consumer Executive",
                company: "India Sports and Scientific Co.",
                duration: "2018 - 2022",
                details: [
                  "Managed product pricing, billing, and customer interaction.",
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-purple-700">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {job.company} | {job.duration}
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  {job.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionsRef.projects}
        className="max-sm:py-10 min-h-0 bg-white/50 backdrop-blur-md flex items-center justify-center p-4 pb-20 pt-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Tic Tac Toe Game",
                description:
                  "Built a functional game using HTML, CSS, and JavaScript.",
                icon: "🎮",
              },
              {
                title: "Dragon Game",
                description:
                  "Designed an interactive game using JavaScript and ReactJS.",
                icon: "🐉",
              },
              {
                title: "Horizontal Axis Wind Turbine (HAWT)",
                description:
                  "Designed a miniature model with recycled materials, producing 0.5V energy.",
                icon: "⚡",
              },
              {
                title: "Extraction Machine",
                description:
                  "Developed a machine to create organic fertilizers and combustible blocks.",
                icon: "🔧",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-purple-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow hover:bg-purple-100"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionsRef.skills}
        className="max-sm:py-10 min-h-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 pb-20 pt-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Languages",
                skills: ["Java", "JavaScript", "HTML/CSS", "ReactJS", "MySQL"],
              },
              {
                category: "Frameworks",
                skills: ["React", "Node.js", "Bootstrap"],
              },
              {
                category: "Developer Tools",
                skills: ["Git", "VS Code"],
              },
              {
                category: "Design Tools",
                skills: [
                  "Adobe Photoshop",
                  "Dreamweaver",
                  "Illustrator",
                  "Client Console",
                ],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section>
        <ContactSection sectionsRef={sectionsRef} />
      </section>
    </div>
  );
};

export default Portfolio;
