import "./App.css";
import Header from "./component/header/Header";
import List from "./component/kyc/List";
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
              <div className="p-4">
                <List />
              </div>
            </div>
            <Slider />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
