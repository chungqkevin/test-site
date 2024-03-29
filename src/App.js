import React from "react";
import "./styles/base.css"; // Importing styles from base file
import Hero from "./components/hero.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Hero/>
      <main className="max-w-800 mx-auto px-4 py-20"> {/* Changed max-w-800px to max-w-800 */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
