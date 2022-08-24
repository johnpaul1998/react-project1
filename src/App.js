import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Layout from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/ContactUs';
import Collection from './pages/Collection';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
