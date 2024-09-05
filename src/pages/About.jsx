import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const about = () => {
  return (
    <section>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"about"} text2={"us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae totam dolorem praesentium ipsum neque nisi enim. Molestias,
            quaerat ab praesentium itaque in magnam, ipsam delectus omnis nemo
            tempore sint. Corporis fugit officiis vero. Amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae totam dolorem praesentium ipsum neque nisi enim. Molestias,
            quaerat ab praesentium itaque in magnam, ipsam delectus omnis nemo
            tempore sint. Corporis fugit officiis vero. Amet!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae totam dolorem praesentium ipsum neque nisi enim. Molestias,
            quaerat ab praesentium itaque in magnam, ipsam delectus omnis nemo
            tempore sint.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae totam dolorem praesentium ipsum neque nisi enim. Molestias,
            quaerat ab praesentium itaque in magnam, ipsam delectus omnis nemo
            tempore sint.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae totam dolorem praesentium ipsum neque nisi enim. Molestias,
            quaerat ab praesentium itaque in magnam, ipsam delectus omnis nemo
            tempore sint.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarnce</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae totam dolorem praesentium ipsum neque nisi enim. Molestias,
            quaerat ab praesentium itaque in magnam, ipsam delectus omnis nemo
            tempore sint.
          </p>
        </div>
      </div>

      <NewsLetterBox/>
    </section>
  );
};

export default about;
