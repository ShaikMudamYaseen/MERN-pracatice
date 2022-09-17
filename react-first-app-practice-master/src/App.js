import logo from './logo.svg';
import './App.css';
import Header from './components//Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header image={logo} userName="John Doe"/>
      <Summary/>
      <Experience/>
      <Contact/>

    </div>
  );
}

export default App;
