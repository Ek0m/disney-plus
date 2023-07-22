import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex justify-between p-3">
      <div className="flex items-center gap-8 ">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <NavbarItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex gap-5 md:hidden items-center">
          {menu.map(
            (item, index) =>
              index < 3 && <NavbarItems name={""} Icon={item.icon} />
          )}
        </div>
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <NavbarItems name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <NavbarItems name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
        </div> 
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Navbar;
