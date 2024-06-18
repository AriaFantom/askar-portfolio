import Image from "next/image";

export default function Home() {
  const about =
    "Hi, I'm [Your Name], a full-stack web developer passionate about crafting clean, efficient, and user-focused digital experiences.  With [number] years of experience, I thrive on solving complex problems and bringing ideas to life through elegant code.";
  return (
    <main className=" flex flex-col items-center justify-between">
      <section className="justify-between mb-36 px-36 w-full flex flex-row items-center">
        <div className="font-heading">
          <h1 className="text-text text-4xl ">{"Hi there! I'm"}</h1>
          <h2 className="text-text text-7xl">Priyanshu Debnath</h2>
          <p className="text-text text-xl">
            {"I'm a software developer who loves to build things for the web."}
          </p>
        </div>
        <Image src="/hero.svg" alt="Hero" width={500} height={500} />
      </section>
      <section className="w-full mt-72 mb-10 px-36 relative">
        <h1 className="text-text text-8xl absolute z-10 top-[-4rem] left-[12rem] font-heading">
          Skills
        </h1>
        <div className="bg-neutral-900 p-10 flex flex-row justify-between rounded-xl z-20 relative">
          <div className="w-1/2">
            <Charts />
          </div>
          <div className="w-1/2 px-20">
            <h2 className="text-4xl text-white font-heading">About ME</h2>
            <p className="text-slate-300 text-xl my-2 font-subheading">
              {`Hi, I'm Priyanshu Debnath [aka Askar], a full-stack web developer passionate about crafting clean,
               efficient, and user-focused digital experiences. With 2 years of experience,`}
            </p>
            <p className="text-slate-300 text-xl my-2 font-subheading">
              With expertise in list key technologies: e.g. Javascript, React.js
              Node.js, Postgres SQL, etc. I&apos;m a full-stack developer who
              enjoys tackling both front-end and back-end challenges.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-72 mb-10 px-36 ">
        <h1 className="text-text text-7xl font-heading">
          <span>&mdash;</span>Projects<span>&mdash;</span>
        </h1>
        <Projects />
      </section>
      <section className="flex flex-col items-center justify-center mt-72 mb-10 w-full">
        <h1 className="mb-4 text-5xl text-center text-white font-heading">
          Contact Us
        </h1>
        <p className="mb-8 font-light text-center text-gray-300 font-subheading">
          Got a question or want to work together? Send me a message and
          I&apos;ll
          <br />
          get back to you as soon as possible.
        </p>
        <Contact />
      </section>
    </main>
  );
}

function Contact() {
  return (
    <form action="#" className="space-y-8 w-1/3 ">
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-400"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="block p-3 w-full text-sm text-white rounded-lg shadow-sm border border-gray-600  bg-neutral-800 outline-none"
          placeholder="email@domain.com"
          required
        />
      </div>
      <div>
        <label
          for="subject"
          className="block mb-2 text-sm font-medium  text-gray-400"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-sm text-white rounded-lg shadow-sm border border-gray-600  bg-neutral-800 outline-none"
          placeholder="Let us know how i can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-white rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 bg-neutral-800 outline-none"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-2 px-4 font-medium text-center ring-1 ring-white text-black  rounded-lg bg-white font-heading "
      >
        Send message
      </button>
    </form>
  );
}

function Projects() {
  const projects = [
    {
      name: "Pokemon Dashboard",
      description: "My first Project with Next.js, TailwindCSS, Stripe",
      image: "/pokemon.png",
      link: "https://pokemonbot.com",
    },
    {
      name: "Classy",
      description:
        "Its is a project for Hackathon 2023, with Next.js, TailwindCSS, Supabase",
      image: "/classy.png",
      link: "https://hackathon.devaskar.online",
    },
  ];
  return (
    <div className="flex flex-row gap-5 items-center justify-center">
      {projects.map((project, index) => (
        <div
          className="flex flex-col items-center text-center justify-center my-10 py-4  rounded-xl bg-zinc-900 w-[45%]"
          key={index}
        >
          <div className="relative cursor-pointer rounded-xl bg-neutral-800 p-3">
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="pt-2 flex flex-col items-center w-3/4">
            <h2 className="text-white text-4xl font-heading">{project.name}</h2>
            <p className="text-slate-300 text-xl font-subheading">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Charts() {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-white font-heading">Frontend</h2>
        <div className="bg-gray-700 h-4 rounded-full">
          <div
            className="bg-blue-500 h-full rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-white font-heading">Backend</h2>
        <div className="bg-gray-700 h-4 rounded-full">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-white font-heading">UI/UX</h2>
        <div className="bg-gray-700 h-4 rounded-full">
          <div
            className="bg-purple-500 h-full rounded-full"
            style={{ width: "55%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-white font-heading">DevOps</h2>
        <div className="bg-gray-700 h-4 rounded-full">
          <div
            className="bg-yellow-500 h-full rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
    </>
  );
}
