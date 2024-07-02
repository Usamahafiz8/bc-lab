import React, { useEffect, useState } from 'react';

const AssetsSection = () => {
  const [assets, setAssets] = useState([]);

  const getColorClass = (value) => {
    // Convert value to a string if it's not null or undefined
    value = value ? String(value) : '';

    if (value.startsWith('-')) {
      return 'text-red-500';
    } else if (value.startsWith('+')) {
      return 'text-green-500';
    } else if (value === '0.00%' || value === '$0.00') {
      return 'text-gray-500';
    } else {
      return '';
    }
  };

  // Fetching data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/assets'); // Ensure this URL points to your API endpoint
        const data = await response.json();
        setAssets(data);
      } catch (error) {
        console.error('Failed to fetch assets:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="backdrop-blur-md bg-[##000000]/20 bg-opacity-50 p-6 rounded-xl border border-[#464646]  w-full">
      <table className="w-full text-left text-white">
        <thead className="border-b border-b-[#4F4F4F]">
          <tr className="text-xl font-semibold">
            <th className="py-2 px-4">Assets</th>
            <th className="py-2 px-4">Last Trade</th>
            <th className="py-2 px-4">24H %</th>
            <th className="py-2 px-4">24H Change</th>
            <th className="py-2 px-4 text-[#3980FF] flex gap-2 items-center ">
              <p className="text-xl">More</p>

              <i className="fa fa-angle-right text-[#3980FF]" aria-hidden="true"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((item, index) => (
            <tr key={index} className="border-gray-700 text-xl font-thin ">
              <td className="py-2 px-4 flex items-center gap-4">
                <img src={item.imageUrl} className="w-16 " />
                <p>{item.symbol}</p>
              </td>
              <td className="py-2 px-4">{item.lastTrade}</td>
              <td className={`py-2 px-4 ${getColorClass(item.percentageChange24h)}`}>{item.percentageChange24h}</td>
              <td className={`py-2 px-4 ${getColorClass(item.priceChange24h)}`}>{item.priceChange24h}</td>
              <td className="py-2 px-4">
                <button className="bg-[#6DFF8B] hover:bg-green-700 text-[#00554B] font-bold py-1 px-4 ">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsSection;
