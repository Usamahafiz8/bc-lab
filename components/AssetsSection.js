import React, { useEffect, useState } from 'react';

const AssetsSection = () => {
  const [assets, setAssets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/assets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAssets(data);
      } catch (error) {
        console.error('Failed to fetch assets:', error);
        setError('Failed to load assets');
      }
    };

    fetchData();
  }, []);

  const getColorClass = (numericValue) => {
    if (numericValue < 0) {
      return 'text-[#FF5454]'; // Negative values
    } else if (numericValue > 0) {
      return 'text-[#6DFFDC]'; // Positive values
    }
    return 'text-gray'; // Zero or neutral values
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="backdrop-blur-md bg-[#000000]/20 bg-opacity-50 p-6 rounded-xl border border-[#464646] w-full">
      <table className="w-full text-left text-white">
        <thead className="border-b border-b-[#4F4F4F]">
          <tr className="text-xl font-medium">
            <th className="py-2 px-8 font-medium">ASSETS</th>  
            <th className="py-2 px-8  font-medium">LAST TRADE</th>
            <th className="py-2 px-8  font-medium">24H %</th>
            <th className="py-2 px-8  font-medium">24H CHANGE</th>
            <th className="py-2 px-4 text-right text-[#3980FF]  font-medium flex gap-2 items-center cursor-pointer ">
              <div className='flex justify-end items-center w-full'>

              <p className="text-xl text-right ">
                MORE

              </p>

              <i className="fa fa-angle-right text-[#3980FF] " aria-hidden="true"></i>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((item, index) => (
            <tr key={index} className="border-gray-700 text-xl font-medium">
              <td className="py-2 px-4 flex items-center gap-4">
                <img src={item.imageUrl} className="w-16" alt={`${item.symbol} icon`} />
                <p>{item.symbol}</p>
              </td>
              <td className="py-2 px-8 ">${item.lastTrade.toLocaleString()}</td>
              <td className={`py-2 px-8 ${getColorClass(item.percentageChange24h)}`}>
                {item.percentageChange24h.toFixed(2)}%
              </td>
              <td className={`py-2 px-8   ${getColorClass(item.priceChange24h)}`}>
                {item.priceChange24h.toFixed(2)}
              </td>
              <td className="py-2 px-4 text-right">
                <button className="bg-[#6DFF8B] hover:bg-green-700 text-[#00554B] font-bold py-1 px-4">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsSection;
