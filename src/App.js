import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <SearchBar />
       <SearchResults />
      </header>
    </div>
  );
}

export default App;
