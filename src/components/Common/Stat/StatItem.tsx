import React from "react";

interface StatItemProps {
  color: string;
  count: number;
  label: string;
  percentage: string;
}

const StatItem: React.FC<StatItemProps> = ({ color, count, label, percentage }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className={`w-5 h-5 rounded-full`} style={{ backgroundColor: color }} />
      <h1 className="font-bold">{count.toLocaleString()}</h1>
      <h2 className="text-xs text-gray-300">
        {label} ({percentage})
      </h2>
    </div>
  );
};

export default StatItem;
