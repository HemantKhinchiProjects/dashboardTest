import "./App.css";
import Header from "./component/header/Header";
import Section from "./component/section/Section";
import Slider from "./component/slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bg-slate-50">
        <div className="container">
          <div className="py-4 px-12 mx-4">
            <div className="grid grid-cols-[9fr,3fr] gap-4 gap-y-10">
              <Section />
              <div className="bg-gray-300 p-4">Column 2</div>
            </div>
            <Slider />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
