// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = ({ title, showButton = false, buttonLink, buttonText }) => {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-white px-4 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
      <div className="flex items-center space-x-4">
        {showButton && buttonLink && (
          <Link to={buttonLink}>
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
              {buttonText}
            </button>
          </Link>
        )}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
          Z
        </div>
      </div>
    </header>
  );
};

export default Header;
