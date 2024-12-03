"use client";

import { CustomPaginationButton } from "../Common/Button";

const Pagination = () => {
  const handleOnNext = () => {
    alert("Hi Next");
  };
  const handleOnPrev = () => {
    alert("Hi Prev");
  };
  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <CustomPaginationButton title="Prev" onClick={handleOnPrev} disabled />
      {/* Pages */}
      <div className="flex items-center gap-2 text-sm">
        <CustomPaginationButton
          extraClassName="px-2 rounded-sm bg-lamaSky"
          isDefault={false}
          title="1"
        />
        <CustomPaginationButton
          isDefault={false}
          title="2"
          extraClassName="px-2 rounded-sm"
        />
        <CustomPaginationButton
          isDefault={false}
          title="3"
          extraClassName="px-2 rounded-sm"
        />
        ...
        <CustomPaginationButton
          isDefault={false}
          title="10"
          extraClassName="px-2 rounded-sm"
        />
      </div>
      <CustomPaginationButton title="Next" onClick={handleOnNext} />
    </div>
  );
};

export default Pagination;
