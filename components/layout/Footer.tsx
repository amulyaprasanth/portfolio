import Link from "next/link";
import {Mail} from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="mt-24 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <p className="text-sm text-gray-400 text-center md:text-left">
                    © {new Date().getFullYear()} Amulya Prasanth Nadagani
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="mailto:amulyaprasanth301@gmail.com"
                        aria-label="Email"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <Mail size={22}/>
                    </Link>

                    <Link
                        href="https://github.com/amulyaprasanth"
                        target="_blank"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <FaGithub size={22}/>
                    </Link>

                    <Link
                        href="https://linkedin.com/in/nadaganiamulyaprasanth"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <FaLinkedin size={22}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
