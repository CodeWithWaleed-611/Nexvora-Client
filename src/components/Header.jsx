import MainBar from "./MainBar";
import TopBar from "./TopBar.jsx";
const Header = () => {
  return (
    <>
      <header className="w-full ">
        <TopBar />
        <MainBar />
      </header>
    </>
  );
};

export default Header;