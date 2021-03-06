import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">

      {/* display header */}
      <Header />

      {/* display cards */}
      <CardsContainer></CardsContainer>

    </div>
  );
}

export default App;
