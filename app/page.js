import Blog from "./Blog/Blog";
import { Carousel } from "./Carousel/Carousel";
import Development from "./Development/Development";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Team from "./Team/Team";

const page = () => {


  return (
    <>
      <Header />
      {/* <Carousel /> */}
      <div className="container mx-auto">
        <Blog />
        <Team />
        <Development />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default page;