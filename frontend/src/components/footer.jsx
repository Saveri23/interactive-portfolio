import { useTheme } from "../context/ThemeContext";
import Resumepdf from "../assets/Saveri_Re.pdf";
export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`py-6 text-center transition-colors ${
        dark ? "text-gray-400 bg-black" : "text-gray-700 bg-gray-100"
      }`}
    >
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
        <span>📧 <a href="mailto:your.email@example.com" className="underline hover:text-blue-500">saverigavvala@gmail.com</a></span>
        <span>📞 <a href="tel:+1234567890" className="underline hover:text-blue-500">+91-9581499335</a></span>
        <span>💼 <a href="https://www.linkedin.com/in/saveri-gavvala-b14166238/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">LinkedIn</a></span>
        <span>📄 <a href={Resumepdf} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Resume</a></span>
      </div>

      {/* Copyright */}
      <div>
        © 2026 Saveri. All rights reserved.
      </div>
    </footer>
  );
}
