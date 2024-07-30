import React from "react";

function Header() {
  return (
    <header className="bg-gray-100 py-4 shadow-md px-6">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="text-2xl font-semibold text-gray-800">
          Dümenden Blog
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-gray-600 hover:text-gray-800">
                Ana sayfa
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-800">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">
                İletişim
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
