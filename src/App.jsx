import React, { useState } from "react";
import ButtonTheme from "./components/ButtonTheme";
import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import ButtonSelect from "./components/ButtonSelect";
import Experience from "./views/Experience";
import BentoGridProjects from "./components/BentoGridProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [viewTab, setViewTab] = useState("projects");

  function onSelectViewTab(selectViewTab) {
    setViewTab(selectViewTab);
  }

  return (
    <>
      <div className="w-full h-full bg-gradient-to-t from-zinc-50 dark:from-gray-800 to-zinc-100 dark:to-gray-900">
        <div className="flex flex-col font-open-sans">
          <ButtonTheme />

          <div className="container mx-auto px-[300px] xl:px-0">
            <Header />
          </div>

          <div className="grid grid-cols-6 gap-4 xl:grid-cols-1 xl:gap-0 px-[300px] xl:px-6">
            <div className="col-span-2 mt-12 mr-6 xl:mr-0">
              <CardInfo />
            </div>

            <div className="col-span-4 mt-12 xl:mt-6">
              <ButtonSelect onSelectViewTab={onSelectViewTab} />

              {viewTab === "experience" ? <Experience /> : null}
              {viewTab === "projects" ? <BentoGridProjects /> : null}
              {viewTab === "contact" ? <Contact /> : null}
            </div>
          </div>

          <div className="px-[300px] xl:px-6">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
