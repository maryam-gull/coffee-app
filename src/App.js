import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <section>
        <h1 className="h-3">Our Blogs</h1>
        <div className="profile-main">
          <Blogs />
          <Blogs />
          <Blogs />
        </div>
      </section>
    </div>
  );
}
export default App;
