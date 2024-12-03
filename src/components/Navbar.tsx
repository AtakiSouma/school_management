import Image from "next/image";
import { Avatar } from "./Common/Avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/images/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* ICON & USER ICON */}
      <div className="flex  items-center gap-6 justify-end w-full ">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/images/message.png" alt="" width={20} height={20} />
        </div>
        <div className="relative  bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/images/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-[12px]">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-semibold">CARLOTTA</span>
          <span className="text-[12px] text-gray-500 text-right">Admin</span>
        </div>

        <Avatar
          src="/images/avatar_charlotta.png"
          alt="avatar"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};

export default Navbar;
