import logo from './logo.svg';
import './App.css';
import Header from './components//Header';
import Reuse from './components/Reuse';
function App() {
  const Summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, debitis ea, iusto earum, autem aut labore omnis repellat perferendis incidunt distinctio dolores! At excepturi hic in fugit molestiae, nesciunt vel?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, debitis ea, iusto earum, autem aut labore omnis repellat perferendis incidunt distinctio dolores! At excepturi hic in fugit molestiae, nesciunt vel?"

  const experience="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, debitis ea, iusto earum, autem aut labore omnis repellat perferendis incidunt distinctio dolores! At excepturi hic in fugit molestiae, nesciunt vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, debitis ea, iusto earum, autem aut labore omnis repellat perferendis incidunt distinctio dolores! At excepturi hic in fugit molestiae, nesciunt vel?"
  const contact="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, debitis ea, iusto earum, autem aut labore omnis repellat perferendis incidunt distinctio dolores! At excepturi hic in fugit molestiae, nesciunt vel?"
  return (
    <div>
      <Header image={logo} userName="John Doe"/>
      <Reuse heading="Summary" content={Summary}/>
      <Reuse heading="Experience" content={experience}/>
      <Reuse heading="Contact" content={contact}/>
      

    </div>
  );
}

export default App;
