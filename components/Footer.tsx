import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center text-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Made with ❤️ by{" "}
          <a
            href="https://keshavverma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Keshav Verma
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
