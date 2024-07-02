import Image from 'next/image';
import React from 'react';
import TokenInput from './TokenInput';

const Swap = () => {
  return (
    <div>
      <div className="backdrop-blur-sm bg-[#000000]/30 text-white bg-opacity-50 p-6 rounded-xl border border-gray-500 w-full">
        <div className="flex justify-between mb-10 items-center">
          <div className="font-semibold text-xl">SWAP TOKENS</div>
          <Image src="/assets/SettingIcon.svg" alt="Logo" width={30} height={30} />
        </div>

        <div className="flex gap-1 mb-10">
          <TokenInput balance="63,790" currency="BTC" />
          {/* Add the middle icon if needed */}
          <TokenInput balance="63,790" currency="BTC" />
        </div>

        <div className="flex justify-between items-center">
          <div className="font-normal text-lg">
            <p>1 BTC = 32.4039 ETH</p>
            <p className="text-[#3980FF]">Free exchange</p>
          </div>
          <div className="font-normal text-lg text-[#666666]">
            <p>Updates in 4s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
