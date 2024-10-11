"use client";

import Right from "../icons/Right";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

export default function Hero() {
  return (
    <section className="hero md:mt-4 gradient-background2 p-8 max-w-auto mx-auto">
      <div className="text-center md:text-left md:w-1/3">
        <h1 className="text-4xl font-semibold text-center text-white">
          Everything <br /> Rocks With <br /> Homemade&nbsp;
          <span className="text-secondary">Cakes</span>
        </h1>
        <p className="my-8 text-stone-200 text-sm text-center">
          Cakes are the sweet missing piece in people's lives, offering more
          than just a delicious treat. They mark celebrations, bring comfort,
          and add joy to everyday moments. Whether it's a slice shared with
          friends or the centerpiece of a special occasion, cakes have a way of
          making life a little brighter, reminding us to savor the sweetness of
          both big and small victories.
        </p>
        <div className="flex gap-4 justify-center text-sm">
          <Link href="/menu">
            {" "}
            {/* Link for Order Now button */}
            <button className="bg-primary justify-center items-center uppercase flex gap-2 text-white py-2 px-4 rounded-full">
              Order Now
              <Right />
            </button>
          </Link>
          <Link href="/menu">
            {" "}
            {/* Link for Learn More button */}
            <button className="flex gap-2 button border-0 items-center py-2 text-stone-600 font-semibold">
              Learn More <Right />
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden md:block">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
          style={{
            display: "inline-block",
            transformOrigin: "center",
          }}
        >
          <img
            src="/cupcake.png"
            alt="Cake Image"
            className="object-contain max-w-sm" // Keeps the smaller image
          />
        </motion.div>
      </div>
    </section>
  );
}
