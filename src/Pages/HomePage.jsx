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
      <div className="carousel container">
        <IntroCarousel />
      </div>
      <div className="BestSelling container">
        <BestSellingSlide />
      </div>

      <div className="categoriesSlides container">
        <h1 className="CatgoryHeader">Top Categories</h1>
        <TopCategoriesSlide />
      </div>
    </>
  );
}

export default HomePage;
