import BestSellingSlide from "./SwiperJS_Components/BestSellingSlide.jsx";
import IntroCarousel from "./SwiperJS_Components/IntroCarousel.jsx";
import TopCategoriesSlide from "./SwiperJS_Components/TopCategoriesSlide.jsx";
TopCategoriesSlide;
BestSellingSlide;
BestSellingSlide;

function HomePage() {
  // Assuming Item is an array of products

  return (
    <>
      <div className="lg:h-[750px] h-[450px] container mx-auto">
        <IntroCarousel />
      </div>
      <div className="BestSelling w-auto mx-auto overflow-auto lg: lg:ml-0">
        <BestSellingSlide />
      </div>

      <div className="categoriesSlides border mt-10">
        <h1 className="CatgoryHeader text-2xl h-[40px] lg:h-[70px] lg:text-5xl">
          Top Categories
        </h1>
        <TopCategoriesSlide />
      </div>
    </>
  );
}

export default HomePage;
