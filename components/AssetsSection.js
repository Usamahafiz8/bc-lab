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
      return 'text-red'; // Negative values
    } else if (numericValue > 0) {
      return 'text-green'; // Positive values
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
          <tr className="text-xl font-semibold">
            <th className="py-2 px-4">Assets</th>
            <th className="py-2 px-4">Last Trade</th>
            <th className="py-2 px-4">24H %</th>
            <th className="py-2 px-4">24H Change</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((item, index) => (
            <tr key={index} className="border-gray-700 text-xl font-thin">
              <td className="py-2 px-4 flex items-center gap-4">
                <img src={item.imageUrl} className="w-16" alt={`${item.symbol} icon`} />
                <p>{item.symbol}</p>
              </td>
              <td className="py-2 px-4">{item.lastTrade.toLocaleString()}</td>
              <td className={`py-2 px-4 ${getColorClass(item.percentageChange24h)}`}>
                {item.percentageChange24h.toFixed(2)}%
              </td>
              <td className={`py-2 px-4 ${getColorClass(item.priceChange24h)}`}>
                {item.priceChange24h.toFixed(2)}
              </td>
              <td className="py-2 px-4">
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
