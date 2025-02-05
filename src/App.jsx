
import './App.css'

import Cards from './components/Cards';
import Destinations from './components/Destinations';
import HappyCustomer from './components/HappyCustomer';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import Footer from './components/Footer';
import Blogs from './components/Blogs';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Cards />
      <Destinations />
      <Blogs />
      <HappyCustomer />
      <Footer />
    </div>
  );
}
export default App;

