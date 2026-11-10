export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/my-first-page" className="hover:text-gray-400">
            My First Page
          </a>
        </li>
        <li>
          <a href="/mon-cv-page" className="hover:text-gray-400">
            Mon cv
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-gray-400">
            Blog
          </a>
        </li>
        <li>
          <a href="/todo" className="hover:text-gray-400">
            Mes taches
          </a>
        </li>
      </ul>
    </nav>
  );
}
