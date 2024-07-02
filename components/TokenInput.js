import React from 'react';
import Image from 'next/image';

const TokenInput = ({ balance, currency }) => {
  return (
    <div className="container p-4 bg-[#1E1E1E] flex justify-between rounded-md">
      <div className="flex flex-col justify-start">
        <p className="text-4xl">0.00</p>
        <p className="text-gray-400">$0.00</p>
      </div>
      <div className="flex flex-col justify-start">
        <div className="bg-black px-4 py-2 flex items-center gap-2">
          <Image src="/assets/BNB.svg" alt="Swap Icon" width={32} height={32} />
          <p className="font-medium text-sm">{currency}</p>
          <i className="fa fa-angle-right text-[#868686]" aria-hidden="true"></i>
        </div>
        <p className="text-gray-400">
          Balance: <span className="text-blue-400">{balance}</span>
        </p>
      </div>
    </div>
  );
};

export default TokenInput;
