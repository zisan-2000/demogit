import React from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  return (
    <section className="hero themeChange grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      {/* Profile Image Section for Small Devices */}
      <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
        <ProfileImage />
      </div>

      {/* Text Section */}
      <div className="textColor order-2 flex-1 space-y-6 md:order-1 md:col-span-7">
        <h4 className="text-2xl font-bold md:text-2xl">
          CEO, Ann-Nahl Software
        </h4>
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello I'm{" "}
          <span className="text-green-500">MD. Amenul Islam Abir</span>
        </h1>
        <p className="text-lg md:text-xl">
          Md. Amenul Islam is the dynamic and forward-thinking CEO of Ann-Nahl,
          a pioneering company dedicated to transforming the digital landscape
          through innovative solutions. With a deep understanding of technology
          and a passion for driving change, Amenul has steered Ann-Nahl towards
          becoming a leader in the industry. Under his leadership, the company
          has expanded its reach, offering cutting-edge services and exceptional
          client experiences. Amenul’s commitment to innovation, strategic
          vision, and strong leadership continues to drive the success of
          Ann-Nahl, making him a key figure in shaping the future of the company
          and its industry.
        </p>
        <Button text="Download CV" />
        <div className="social-icons mt-4 flex space-x-4">
          {/* Social media icons can be added here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
