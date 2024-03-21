import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import News from "./components/News";
import OurPeople from "./components/OurPeople";
import ContactUs from "./components/ContactUs";
import Main from "./components/Main";
import { ProjectProvider } from '../ProjectContext';

function App() {
  return (
    <>




<ProjectProvider>
<Main/>
    </ProjectProvider>

{/* <Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/news" element={<News/>}/>
<Route path="/ourpeople" element={<OurPeople/>}/>
<Route path="/contactus" element={<ContactUs/>}/>
</Routes>
<Footer/> */}


    </>
  );
}

export default App;
