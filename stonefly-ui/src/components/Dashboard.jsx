import React from "react";
import Pic from "../assets/cpu&Network.png";
import ss from "../assets/ss.png";
import { FaServer, FaNetworkWired, FaDatabase, FaMemory } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Dashboard Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold pl-[20px] text-[#4c4c51] mb-[5px]">
          Dashboard
        </h1>
        <hr className="border-[#4c4c51] border-2 rounded-md" />
      </div>

      {/* Information Section */}
      <div className="bg-[#4c4c51] text-white rounded-lg p-4 flex justify-between items-center mb-6">
        <p className="font-bold"> Information </p>
        {[
          {
            icon: <FaServer />,
            label: "ISCSI SAN IP",
            value: "192.168.10.255",
          },
          {
            icon: <FaDatabase />,
            label: "NAS LAN IP",
            value: "192.168.10.255",
          },
          {
            icon: <FaNetworkWired />,
            label: "ISCSI LAN IP",
            value: "192.168.10.255",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-r last:border-r-0 pr-4 last:pr-0"
          >
            <div className="text-2xl">{item.icon}</div>
            <div>
              <p className="text-sm">{item.label}</p>
              <p className="font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* image section  */}
      <div>
        <img width={1500} src={Pic} alt="Cpu and its pic" />
      </div>

      {/* Cards Section */}

      <div className=" mt-[25px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Concentrator Type */}
        <div className="bg-[#4c4c51] rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-lg font-bold mb-4">Concentrator Type</h2>
          <p className="text-sm mb-2">Name: SC-192-168-10-250</p>
          <p className="text-sm mb-2">MGMT: 192.168.10.250</p>
          <p className="text-sm mb-4">ISCSI IP: 192.168.10.250</p>
          {/* <img
      src={ss}
      width={100}
      height={100}
      alt="Concentrator Image"
      className="w-full rounded-lg"
    /> */}
        </div>

        {/* Card 2: Quick Links */}
        <div className="bg-[#4c4c51] rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <div className="text-center">
            <button className="bg-white text-black hover:text-white px-4 py-2 rounded-lg shadow hover:bg-[#326584]">
              Customer Support
            </button>
          </div>
        </div>

        {/* Card 3: Discovered SC's */}
        <div className="bg-[#4c4c51] rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-lg font-bold mb-4">Discovered SC's</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>SC-192-168-10-250</span>
              <button className="bg-white text-black hover:text-white px-2 py-1 rounded-lg hover:bg-[#326584]">
                Open
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>SC-192-168-10-250</span>
              <button className="bg-white text-black hover:text-white px-2 py-1 rounded-lg hover:bg-[#326584]">
                Open
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
