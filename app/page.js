import Blog from "./Blog/Blog";
import { Carousel } from "./Carousel/Carousel";
import Header from "./Header/Header";

const page = () => {


  return (
    <>
      <Header />
      {/* <Carousel /> */}
      <div className="container mx-auto">
        <Blog />
      </div>
    </>
  );
};

export default page;