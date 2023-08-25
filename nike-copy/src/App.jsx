import {
  PopularProducts,
  Services,
  SpecialOffers,
  SuperqualityProducts,
  CustomerReviews,
  Footer,
  Subscribe,
  Hero,
} from "./sections/index";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative scroll-smooth md:scroll-auto">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        {" "}
        <PopularProducts />{" "}
      </section>
      <section className="padding">
        {" "}
        <SuperqualityProducts />{" "}
      </section>
      <section className="padding-x py-10">
        {" "}
        <Services />{" "}
      </section>
      <section className="padding">
        {" "}
        <SpecialOffers />{" "}
      </section>
      <section className="padding bg-pale-blue">
        {" "}
        <CustomerReviews />{" "}
      </section>
      <section className="sm:py-32 py-16 w-full">
        {" "}
        <Subscribe />{" "}
      </section>
      <section className="bg-black padding-t pb-8 padding-x">
        {" "}
        <Footer />{" "}
      </section>
    </main>
  );
};

export default App;
