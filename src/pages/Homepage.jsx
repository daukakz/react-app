import { Navbar } from "../components/navbar/Navbar";
import { Header } from "../containers/header/Header";
import { Footer } from "../containers/footer/Footer";

const Homepage = () => {
  return (
    <div className="Account">
      <div className="gradient_bg">
        <Navbar />
      </div>
      <Header />
      <div className="gradient_bg">
        <Footer />
      </div>
    </div>
  );
};

export { Homepage };
