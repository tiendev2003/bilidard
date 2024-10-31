import {
  BillardPopular,
  BillardPromotion,
  BillardTag,
  Destination,
  Hero,
  Search,
  Testimonial,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Search />
      <BillardPromotion />
      <Destination />
      <BillardPopular />
      <BillardTag />
      <Testimonial />
    </>
  );
};

export default HomePage;
