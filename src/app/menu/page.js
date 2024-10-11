"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
    fetch("api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  return (
    <section className="mt-8 gradient-background2 rounded-lg p-4">
      {categories?.length > 0 &&
        categories.map((c) => (
          <div key={c._id}>
            <div className="text-center p-1 rounded-xl">
              <SectionHeaders mainHeader={c.name} />
            </div>

            {/* Flex container for items, ensure equal height */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 mb-12">
              {menuItems
                .filter((item) => item.category === c._id)
                .map((item) => (
                  <div
                    key={item._id}
                    className="w-full sm:w-full md:max-w-sm lg:max-w-md flex flex-col"
                  >
                    <MenuItem {...item} />
                  </div>
                ))}
            </div>
          </div>
        ))}
    </section>
  );
}
