import React, { useState } from "react";
import ButtonTheme from "./components/ButtonTheme";
import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import ButtonSelect from "./components/ButtonSelect";
import BentoGridProjects from "./components/BentoGridProjects";
import CardTechnologies from "./components/CardTechnologies";
import Footer from "./components/Footer";

function App() {
  const [viewTab, setViewTab] = useState("projects");

  function onSelectViewTab(selectViewTab) {
    setViewTab(selectViewTab);
  }

  return (
    <>
      <div className="w-full h-full bg-gradient-to-t from-gray-50 dark:from-slate-900 to-gray-300 dark:to-slate-700">
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

              {viewTab === "projects" ? <BentoGridProjects /> : null}
              {viewTab === "about me" ? (
                <div>
                  <CardTechnologies />
                </div>
              ) : null}
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
