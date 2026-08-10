"use client";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const onClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="sticky top-0 shadow-sm z-10">
      <nav>
        <div className="max-w-7xl mx-auto flex justify-between h-16 items-center px-6">
          
          <div className="text-xl font-bold">
            <button
              onClick={() => onClick("hero")}
              className="hidden md:block text-xl font-bold tracking-tight">
              Amulya Prasanth Nadagani
            </button>
          </div>

          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-white hover:text-gray-600 transition-colors">
                <button onClick={() => onClick(link.href)}>{link.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
