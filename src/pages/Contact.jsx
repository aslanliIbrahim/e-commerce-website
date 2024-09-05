import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const contact = () => {
  return (
    <section>
      <div>
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={"Contact"} text2={"Us"} />
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img
            src={assets.contact_img}
            alt="contact_img"
            className="w-full md:max-w-[480px]"
          />
          <div className=" flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="text-gray-600">
              silicon valley <br /> Suite 350, America{" "}
            </p>
            <p className="text-gray-500">
              +994 (51)-334-22-88 <br /> Email:aslanov.ibrahim061@gmail.com
            </p>
            <p className="text-gray-500"></p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
