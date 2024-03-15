import Header from "./components/Header";
import ButtonTheme from "./components/ButtonTheme";

function App() {
  return (
    <>
      <div class="w-screen h-screen (bg-gradient-to-t from-gray-50 to-gray-300) dark:bg-gradient-to-t from-slate-900 to-slate-700">
        <ButtonTheme />
        <Header />
      </div>
    </>
  );
}

export default App;
