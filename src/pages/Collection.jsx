import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showList, setShowList] = useState(false);


  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*Filter Option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowList(!showList)}
          className="my-2 text-xl flex items-center text-center gap-2 cursor-pointer text-transform: uppercase"
        >
          filters
          <img
            className={`h-3 sm:hidden ${
              showList ? "transition-all rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt="dropdown_icon"
          />
        </p>
        {/*Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showList ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-transform: uppercase text-sm font-medium mb-3">
            categories
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} /> Men
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} /> Women
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} /> Kids
            </label>
          </div>
        </div>
        {/*SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showList ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-transform: uppercase text-sm font-medium mb-3">
            type
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} />
              Topwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} />
              {"Bottomwear"}
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} />
              Winterwear
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
