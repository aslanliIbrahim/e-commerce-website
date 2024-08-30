import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm ">
      <div>
        <img src={assets.logo} alt="logo" className="mb-5 w-32" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
          magni facilis maiores harum libero mollitia perferendis nemo
          voluptatem ex.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Get in touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+994 (51)334-22-88</li>
          <li>ibrahim.aslanov061@gmail.com</li>
        </ul>
      </div>
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com</p>
      </div>
    </footer>
  );
};

export default Footer;
