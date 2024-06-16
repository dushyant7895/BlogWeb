
import './App.css';
import Header from './components/Header';
import BlogData from './components/BlogData';
import Footer from './components/Footer';
import { useContext,useEffect } from 'react';
import { AppContext } from './context/AppContext';
function App() {

  const {fetchBlogPosts} =useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
},[]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <BlogData />
      <Footer />
    </div>
  );
}

export default App;
