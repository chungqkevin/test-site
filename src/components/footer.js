import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-2 font-display font-medium tracking-wide leading-relaxed mb-2 flex flex-col lg:flex-row justify-between items-center">
      <span className="mb-2 lg:mb-0">© Papillon</span>
      <button className="text-black hover:opacity-50 lg:mr-4">Join the maillist</button>
    </footer>
  );
}

export default Footer;
