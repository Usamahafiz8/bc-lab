import React from "react";

const AssetsSection = () => {
  const data = [
    {
      name: "BTC/USD",
      lastTrade: "$63,000.00",
      change24h: "-2.21%",
      changeValue: "-$1,426.18",
      icon: "🟧",
    },
    {
      name: "ETH/USD",
      lastTrade: "$3,408.90",
      change24h: "-0.33%",
      changeValue: "-$11.20",
      icon: "🟪",
    },
    {
      name: "DOGE/USD",
      lastTrade: "$0.15",
      change24h: "+15.75%",
      changeValue: "+$0.02",
      icon: "🟨",
    },
    {
      name: "ALGO/USD",
      lastTrade: "$0.15",
      change24h: "0.00%",
      changeValue: "$0.00",
      icon: "⬛",
    },
    {
      name: "DOT/USD",
      lastTrade: "$3.64",
      change24h: "0.00%",
      changeValue: "$0.00",
      icon: "🟣",
    },
    {
      name: "UNI/USD",
      lastTrade: "$9.79",
      change24h: "0.00%",
      changeValue: "$0.00",
      icon: "🟡",
    },
    {
      name: "COMP/USD",
      lastTrade: "$45.67",
      change24h: "-0.95%",
      changeValue: "-$0.44",
      icon: "🟢",
    },
  ];

  const getColorClass = (value) => {
    if (value.startsWith("-")) {
      return "text-red-500";
    } else if (value.startsWith("+")) {
      return "text-green-500";
    } else if (value === "0.00%" || value === "$0.00") {
      return "text-gray-500";
    } else {
      return "";
    }
  };

  return (
    <div
      className=" flex items-center justify-center"
      //   style={{ backgroundImage: "url(/assets/hero-bg.jpg)" }}
    >
      <div className="backdrop-blur-sm bg-[#ffffff]/20 bg-opacity-50 p-6 rounded-xl  border border-red max-w-4xl w-full">
        <table className="w-full text-left text-white ">
          <thead className=" border-b border-b-[#4F4F4F]">
            <tr>
              <th className="py-2 px-4">Assets</th>
              <th className="py-2 px-4">Last Trade</th>
              <th className="py-2 px-4">24H %</th>
              <th className="py-2 px-4">24H Change</th>
              <th className="py-2 px-4">More</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="  border-gray-700">
                <td className="py-2 px-4 flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </td>
                <td className="py-2 px-4">{item.lastTrade}</td>
                <td className={`py-2 px-4 ${getColorClass(item.change24h)}`}>
                  {item.change24h}
                </td>
                <td className={`py-2 px-4 ${getColorClass(item.changeValue)}`}>
                  {item.changeValue}
                </td>
                <td className="py-2 px-4">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetsSection;
