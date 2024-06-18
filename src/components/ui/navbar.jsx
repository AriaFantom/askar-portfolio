export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-primary">
      <h1 className="text-white text-4xl font-heading">Portfolio .</h1>
      <nav>
        <ul className="flex space-x-4 font-heading">
          <li>
            <a href="#" className="text-white text-2xl ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl ">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl ">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className=" text-xl bg-white px-6 py-2 rounded-lg font-heading">
          Blog
        </button>
      </div>
    </header>
  );
}
