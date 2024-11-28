// import React, { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";

// const Menus = [
//   {
//     title: "SAN",
//     subMenus: [
//       {
//         title: "Volume",
//         nestedDropdown: ["Create New Volume", "Auto Volume", "Manual Volume"],
//       },
//       { title: "Host" },
//       { title: "Session" },
//     ],
//     isOpen: false,
//   },
//   {
//     title: "Target Portal",
//     subMenus: [
//       {
//         title: "Portal",
//         // nestedDropdown: ["Create New Volume", "Auto Volume", "Manual Volume"],
//       },
//       // { title: "Host" },
//       // { title: "Session" },
//     ],
//     isOpen: false,
//   },
//   {
//     title: "NAS",
//     subMenus: [
//       {
//         title: "Segments",
//         nestedDropdown: [
//           // "Create New Volume", "Auto Volume", "Manual Volume"
//         ],
//       },
//       { title: "Antivirus" },
//       { title: "Scaleout" },
//     ],
//     isOpen: false,
//   },
//   {
//     title: "Resources",
//     subMenus: [
//       {
//         title: "Create Flash Cache",
//         nestedDropdown: [
//           // "Create New Volume", "Auto Volume", "Manual Volume"
//         ],
//       },
//       { title: "Flash Cache Configuration" },
//       { title: "Create Object Storage" },
//       {
//         title: "Detail",
//         nestedDropdown: [
//           // "Create New Volume", "Auto Volume", "Manual Volume"
//         ],
//       },
//     ],
//     isOpen: false,
//   },
//   {
//     title: "System",
//     subMenus: [
//       {
//         title: "Admin",
//         nestedDropdown: [
//           // "Create New Volume", "Auto Volume", "Manual Volume"
//         ],
//       },
//       { title: "Network" },
//       {
//         title: "iDiagnostics",
//         nestedDropdown: [
//           // "Create New Volume", "Auto Volume", "Manual Volume"
//         ],
//       },
//       { title: "Notification" },
//       { title: "Ups" },
//       {
//         title: "Users",
//         nestedDropdown: [
//           // "Create New Volume", "Auto Volume", "Manual Volume"
//         ],
//       },
//     ],
//     isOpen: false,
//   },
//   {
//     title: "Reports",
//     subMenus: [
//       { title: "Log" },
//       { title: "Configuration Report" },
//       { title: "Historical Statistics" },
//       { title: "Debug Log" },
//       { title: "Live Statistics" },
//     ],
//     isOpen: false,
//   },
// ];

// const App = () => {
//   const [Menu, SetMenu] = useState(Menus);
//   const [open, setOpen] = useState(true);
//   const [activeSubMenu, setActiveSubMenu] = useState("");
//   const [nestedOpen, setNestedOpen] = useState(null);

//   const toggleMenu = (index) => {
//     SetMenu((prevMenus) =>
//       prevMenus.map((menu, i) => ({
//         ...menu,
//         isOpen: i === index ? !menu.isOpen : menu.isOpen,
//       }))
//     );
//   };

//   const toggleNestedDropdown = (index) => {
//     setNestedOpen(nestedOpen === index ? null : index);
//   };

//   const toggleSidebar = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="bg-[#4c4c51] text-white p-8">
//       <div className="flex flex-col justify-center  ">
//         <div className="flex justify-center items-center bg-white rounded-full w-[80px] h-[80px] m-auto ">
//           <img
//             src="https://stonefly.com/wp-content/uploads/2016/10/LOGONEW.svg"
//             alt=""
//             className=" w-[50px] h-[50px]"
//           />
//         </div>
//         <div className="text-center font-bold pt-[7px]">
//           <p>SC-172-125-82-211</p>
//         </div>
//         <div className="text-center">
//           {" "}
//           <p>Administrator</p>
//         </div>
//       </div>

//       <div className="mt-[15px] bg-[#326584] pt-[px] pb-[3px] pl-[20px] pr-[20px] rounded-md">
//         <p className="font-bold text-2xl ">Dashboard</p>
//       </div>

//       <div className="  flex items-end justify-end">
//         <div
//           className={`${
//             open ? "w-50 px-2" : "w-0"
//           } lg:w-72 bg-white-600 h-full relative duration-500`}
//         >
//           <ul className="pt-2">
//             {Menu.map((menu, index) => (
//               <div key={index}>
//                 <li
//                   className="flex rounded-md p-2 font-semibold cursor-pointer  text-xl items-center gap-x-4"
//                   onClick={() => toggleMenu(index)}
//                 >
//                   <span className="flex-1">{menu.title}</span>
//                   {menu.subMenus && (
//                     <BsChevronDown
//                       className={`${menu.isOpen && "rotate-180"}`}
//                     />
//                   )}
//                 </li>
//                 {menu.subMenus && menu.isOpen && open && (
//                   <ul>
//                     {menu.subMenus.map((subMenu, idx) => (
//                       <div key={idx}>
//                         <li
//                           className="flex cursor-pointer  text-md py-2 px-11"
//                           onClick={() =>
//                             subMenu.nestedDropdown
//                               ? toggleNestedDropdown(idx)
//                               : null
//                           }
//                         >
//                           {subMenu.title}
//                           {subMenu.nestedDropdown && (
//                             <BsChevronDown
//                               className={`ml-2 ${
//                                 nestedOpen === idx && "rotate-180"
//                               }`}
//                             />
//                           )}
//                         </li>
//                         {subMenu.nestedDropdown && nestedOpen === idx && (
//                           <ul className="ml-16">
//                             {subMenu.nestedDropdown.map((nestedItem, nIdx) => (
//                               <li
//                                 key={nIdx}
//                                 className="text-sm py-1 px-4 text-gray-500 "
//                               >
//                                 {nestedItem}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;












import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Menus = [
  {
    title: "SAN",
    subMenus: [
      {
        title: "Volume",
        nestedDropdown: ["Create New Volume", "Auto Volume", "Manual Volume"],
      },
      { title: "Host" },
      { title: "Session" },
    ],
    isOpen: false,
  },
  {
    title: "Target Portal",
    subMenus: [
      {
        title: "Portal",
      },
    ],
    isOpen: false,
  },
  {
    title: "NAS",
    subMenus: [
      {
        title: "Segments",
        nestedDropdown: [],
      },
      { title: "Antivirus",
        nestedDropdown: [],
       },
      { title: "Scaleout",
        nestedDropdown: [],
       },
    ],
    isOpen: false,
  },
  {
    title: "Resources",
    subMenus: [
      {
        title: "Create Flash Cache",
      },
      { title: "Flash Cache Configuration" },
      { title: "Create Object Storage" },
      {
        title: "Detail",
        nestedDropdown: [],
      },
    ],
    isOpen: false,
  },
  {
    title: "System",
    subMenus: [
      { title: "Admin", nestedDropdown: [], },
      { title: "Network" },
      { title: "iDiagnostics", nestedDropdown: [], },
      { title: "Notification" },
      { title: "Ups" },
      { title: "Users",nestedDropdown: [], },
    ],
    isOpen: false,
  },
  {
    title: "Reports",
    subMenus: [
      { title: "Log" },
      { title: "Configuration Report" },
      { title: "Historical Statistics" },
      { title: "Debug Log" },
      { title: "Live Statistics" },
    ],
    isOpen: false,
  },
];

const App = () => {
  const [Menu, SetMenu] = useState(Menus);
  const [open, setOpen] = useState(true);
  const [nestedOpen, setNestedOpen] = useState({}); // Object to track nested dropdowns

  const toggleMenu = (index) => {
    SetMenu((prevMenus) =>
      prevMenus.map((menu, i) => ({
        ...menu,
        isOpen: i === index ? !menu.isOpen : menu.isOpen,
      }))
    );
  };

  const toggleNestedDropdown = (parentIndex, subIndex) => {
    setNestedOpen((prev) => ({
      ...prev,
      [`${parentIndex}-${subIndex}`]: !prev[`${parentIndex}-${subIndex}`],
    }));
  };

  return (
    <div className="bg-[#4c4c51] text-white p-8">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center bg-white rounded-full w-[80px] h-[80px] m-auto">
          <img
            src="https://stonefly.com/wp-content/uploads/2016/10/LOGONEW.svg"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="text-center font-bold pt-[7px]">
          <p>SC-172-125-82-211</p>
        </div>
        <div className="text-center">
          <p>Administrator</p>
        </div>
      </div>

      <div className="mt-[15px] bg-[#326584] pt-[px] pb-[3px] pl-[20px] pr-[20px] rounded-md">
        <p className="font-bold text-2xl">Dashboard</p>
      </div>

      <div className="flex items-end justify-end">
        <div
          className={`${
            open ? "w-50 px-2" : "w-0"
          } lg:w-72 bg-white-600 h-full relative duration-500`}
        >
          <ul className="pt-2">
            {Menu.map((menu, parentIndex) => (
              <div key={parentIndex}>
                <li
                  className="flex rounded-md p-2 font-semibold cursor-pointer text-xl items-center gap-x-4"
                  onClick={() => toggleMenu(parentIndex)}
                >
                  <span className="flex-1">{menu.title}</span>
                  {menu.subMenus && (
                    <BsChevronDown
                      className={`${menu.isOpen && "rotate-180"}`}
                    />
                  )}
                </li>
                {menu.subMenus && menu.isOpen && open && (
                  <ul>
                    {menu.subMenus.map((subMenu, subIndex) => (
                      <div key={subIndex}>
                        <li
                          className="flex cursor-pointer text-sm py-2 px-11"
                          onClick={() =>
                            subMenu.nestedDropdown
                              ? toggleNestedDropdown(parentIndex, subIndex)
                              : null
                          }
                        >
                          {subMenu.title}
                          {subMenu.nestedDropdown && (
                            <BsChevronDown
                              className={`ml-2 ${
                                nestedOpen[`${parentIndex}-${subIndex}`] &&
                                "rotate-180"
                              }`}
                            />
                          )}
                        </li>
                        {subMenu.nestedDropdown &&
                          nestedOpen[`${parentIndex}-${subIndex}`] && (
                            <ul className="ml-14">
                              {subMenu.nestedDropdown.map(
                                (nestedItem, nIdx) => (
                                  <li
                                    key={nIdx}
                                    className="text-sm py-1 px-4 text-white"
                                  >
                                    {nestedItem}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
