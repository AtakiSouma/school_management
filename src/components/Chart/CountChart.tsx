 "use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StatItem } from "../Common/Stat";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#ffffff",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold"> Students</h1>
        <Image
          src="/images/moreDark.png"
          alt="more_dark"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <div className=" relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/images/maleFemale.png"
          alt="male_female_png"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <StatItem color="#1E90FF" count={1234} label="Boys" percentage="55%" />
        <StatItem color="#FFD700" count={1012} label="Girls" percentage="45%" />
      </div>
    </div>
  );
};

export default CountChart;
