import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;