import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Shop from "./components/Shop.jsx";
import News from "./components/News.jsx";
import ContactMain from "./components/ContactMain.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactMain />} />
        </Route>
      </Routes>

      {/* <Header /> */}
      {/* <Home/> */}
      {/* <About /> */}
      {/* <Shop /> */}
      {/* <News></News> */}
      {/* <ContactMain />
      <Footer /> */}
    </>
  );
}

export default App;
