
import './App.css'

import Cards from './components/Cards';
import Destinations from './components/Destinations';
import HappyCustomer from './components/HappyCustomer';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';



function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Cards />
      <Destinations />
      <HappyCustomer />
    </div>
  );
}
export default App;

