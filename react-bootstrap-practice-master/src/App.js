import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card1 from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const content =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
  const style = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(159, 157, 157, 0.2)",
    padding: "3rem",
    flexWrap: "wrap",
  };
  return (
    <div>
      <Header />
      <Banner />
      <div style={style}>
        <Card1 title="Album 1" content={content} img={logo} />
        <Card1 title="Album 2" content={content} img={logo} />
        <Card1 title="Album 3" content={content} img={logo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
