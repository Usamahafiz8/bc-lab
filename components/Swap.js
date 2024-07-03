import Image from 'next/image';
import React from 'react';
import TokenInput from './TokenInput';
import Button from './Button';

const Swap = () => {
  return (
    <div>
      <div className="backdrop-blur-sm bg-[#000000]/30 text-white bg-opacity-50 p-6 rounded-xl border border-gray-500 w-full">
        <div className="flex justify-between mb-10 items-center">
          <div className="font-semibold text-xl">SWAP TOKENS</div>
          <div className="cursor-pointer">
            <Image src="/assets/SettingIcon.svg" alt="Logo" width={30} height={30} />
          </div>
        </div>

        {/* <div className="bg-black relative pb-28">
      <div className="bg-cover bg-no-repeat bg-center h-screen" >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div> */}

        <div className=" relative flex gap-1 mb-10">
          {/* Add the middle icon if needed */}
          <div className=" absolute flex top-10 left-50 z-10">sdas</div>
          <TokenInput balance="63,790" currency="BTC" />
          <TokenInput balance="63,790" currency="BTC" />
        </div>

        <div className="text-center">
          <Button text={'SWOP TOKENS'} styles={'w-64'} />
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
