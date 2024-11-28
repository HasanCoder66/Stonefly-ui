import React from "react";

const ResourcesTable = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Resources</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-black px-4 py-8">Image</th>
              <th className="border border-black px-4 py-8">Name</th>
              <th className="border border-black px-4 py-8">Path</th>
              <th className="border border-black px-4 py-8">Total Space (GiB)</th>
              <th className="border border-black px-4 py-8">Used (GiB)</th>
              <th className="border border-black px-4 py-8">Free (GiB)</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border border-black">
              <td className="border border-black px-4 py-2">
                {/* <img
                  src="https://via.placeholder.com/50"
                  alt="Placeholder"
                  className="w-12 h-12 object-cover"
                /> */}
              </td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
              <td className="border border-black px-4 py-2 text-center">500</td>
              <td className="border border-black px-4 py-2">
                <div className="relative w-full bg-gray-300 h-6 rounded">
                  <div
                    className="absolute top-0 left-0 bg-blue-600 h-6 rounded"
                    style={{ width: "91%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-blue-600 mt-1 block text-center">
                  91%
                </span>
              </td>
              <td className="border-black px-4 py-2 text-center">Lorem Ipsum</td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="border border-black px-4 py-2">
                {/* <img
                  src="https://via.placeholder.com/50"
                  alt="Placeholder"
                  className="w-12 h-12 object-cover"
                /> */}
              </td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
              <td className="border border-black px-4 py-2 text-center">400</td>
              <td className="border border-black px-4 py-2">
                <div className="relative w-full bg-gray-300 h-6 rounded">
                  <div
                    className="absolute top-0 left-0 bg-blue-600 h-6 rounded"
                    style={{ width: "56%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-blue-600 mt-1 block text-center">
                  56%
                </span>
              </td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="border border-black px-4 py-2">
                {/* <img
                  src="https://via.placeholder.com/50"
                  alt="Placeholder"
                  className="w-12 h-12 object-cover"
                /> */}
              </td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
              <td className="border border-black px-4 py-2 text-center">700</td>
              <td className="border border-black px-4 py-2">
                <div className="relative w-full bg-gray-300 h-6 rounded">
                  <div
                    className="absolute top-0 left-0 bg-blue-600 h-6 rounded"
                    style={{ width: "91%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-blue-600 mt-1 block text-center">
                  91%
                </span>
              </td>
              <td className="border border-black px-4 py-2 text-center">Lorem Ipsum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourcesTable;
