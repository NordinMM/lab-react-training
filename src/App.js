import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Id from './components/Id';
import './';
function App() {
  return (
    <div className="App">
      <h1>ID Card</h1>
      
      <Id
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="Male"
        height={178}
        birth={new Date('1992-07-14')}
      />
      <Id
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1 className='h1'>Greetings</h1>

      <Greetings lang="de"> Ludwic</Greetings>
      <Greetings lang="en"> Marc</Greetings>
      <Greetings lang="es"> Daniel</Greetings>
      <Greetings lang="fr"> François</Greetings>
    </div>
  );
}

export default App;
