import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 " id="about">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className=" text-gray-100 max-w-4xl mx-auto mt-8 flex flex-col rounded-lg gap-4 gradient-background2 p-5">
          <p>
            A company that specializes in creating delightful, custom-made cakes
            for every occasion using the finest ingredients.
          </p>
          <p>
            With a passion for quality, we source the finest local ingredients
            to craft delectable cakes, ranging from classic flavors to unique,
            custom creations. From rich chocolate indulgence to light and fluffy
            sponge cakes, every cake is baked with precision and love. Whether
            you're celebrating a special occasion, ordering for delivery, or
            catering an event, we ensure every cake is a work of art, designed
            to bring sweetness and joy to your moment.
          </p>
          <p>
            Every cake is baked with precision and love. Whether you're
            celebrating a special occasion, ordering for delivery, or catering
            an event, we ensure every cake is a work of art, designed to bring
            sweetness and joy to your moment.
          </p>
        </div>
      </section>
      <section
        className="text-center mt-8 gradient-background2 rounded-lg p-4"
        id="contact"
      >
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contanct Us"}
        />
        <div className="mt-8">
          <a className="text-3xl  text-gray-300" href="tel:++49798888392">
            +49 798 888 392
          </a>
        </div>
      </section>
    </>
  );
}
