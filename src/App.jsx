import React from "react";
import ButtonTheme from "./components/ButtonTheme";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-gray-50 dark:from-slate-900 to-gray-300 dark:to-slate-700">
        <div className="flex flex-col">
          <ButtonTheme />
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
