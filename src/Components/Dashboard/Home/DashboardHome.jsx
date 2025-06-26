import { useEffect, useState } from "react";
import { FaUserAlt, FaDollarSign } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const DashboardHome = () => {
  const [totalBids, setTotalBids] = useState(0);

  useEffect(() => {
    fetch("https://assignment-10-server-side-dun-two.vercel.app/bids-count")
      .then((res) => res.json())
      .then((data) => setTotalBids(data.totalBids));
  }, []);

  return (
    <div>
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-grow">
          {/* Total Task */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40">
              <FaTasks className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm font-normal text-blue-gray-600">
                Total Task
              </p>
              <h4 className="text-2xl font-semibold text-blue-gray-900">20</h4>
            </div>
          </div>

          {/* My Posted Task */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40">
              <MdTask className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm font-normal text-blue-gray-600">
                My Posted Task
              </p>
              <h4 className="text-2xl font-semibold text-blue-gray-900">120</h4>
            </div>
          </div>

          {/* ✅ Total Bids */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40">
              <BiDollarCircle className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm font-normal text-blue-gray-600">
                Total Bids
              </p>
              <h4 className="text-2xl font-semibold text-blue-gray-900">
                {totalBids}
              </h4>
            </div>
          </div>

          {/* Total Users */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40">
              <FaUserAlt className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm font-normal text-blue-gray-600">
                Total User
              </p>
              <h4 className="text-2xl font-semibold text-blue-gray-900">10</h4>
            </div>
          </div>
        </div>

        {/* Chart and Calendar area (unchanged) */}
        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2"></div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
