import React from "react";

const stats = [
  { label: "Years of experience", value: 11 },
  { label: "Projects completed", value: 24 },
  { label: "Technologies mastered", value: 7 },
  { label: "Code commits", value: 452 },
];

const Stats = () => {
  return (
    <section className="stats themeChange ml-6 flex gap-5">
      {stats.map((stat, index) => (
        <div key={index} className="textColor text-center">
          <h3 className="text-3xl font-bold">{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
