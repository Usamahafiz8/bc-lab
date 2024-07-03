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
            <Image src="/assets/SettingIcon.svg" alt="Settings Icon" width={30} height={30} />
          </div>
        </div>

        <div className="relative flex justify-center items-center mb-10 gap-2">
          <div className="container p-4 bg-[#1E1E1E] flex justify-between items-center rounded-l-lg pr-10">
            <div className="flex flex-col justify-start">
              <p className="text-4xl">0.00</p>
              <p className="text-gray-400 mt-1">$0.00</p>
            </div>
            <div className="flex flex-col justify-start">
              <div className="bg-black px-4 py-2 flex items-center gap-2 cursor-pointer">
                <Image src="/assets/BTC.svg" alt="BTCIcon" width={22} height={32} />
                <p className="font-medium text-sm">BTC</p>
                <i className="fa fa-angle-right text-[#868686]" aria-hidden="true"></i>
              </div>
              <p className="text-gray-400 mt-1">
                Balance: <span className="text-blue-400">63,790</span>
              </p>
            </div>
          </div>

          <div className=" absolute text-purple-500 transform scale-150 cursor-pointer">
            <Image src="/assets/Swap.svg" alt="Swap Icon" width={32} height={32} />
          </div>

          <div className="container p-4 bg-[#1E1E1E] flex justify-between items-center rounded-r-lg pl-10">
            <div className="flex flex-col justify-start">
              <p className="text-4xl">0.00</p>
              <p className="text-gray-400 mt-1">$0.00</p>
            </div>
            <div className="flex flex-col justify-start">
              <div className="bg-black px-4 py-2 flex items-center gap-2 cursor-pointer">
                <Image src="/assets/BNB.svg" alt="BNB Icon" width={32} height={32} />
                <p className="font-medium text-sm">BNB</p>
                <i className="fa fa-angle-right text-[#868686]" aria-hidden="true"></i>
              </div>
              <p className="text-gray-400 mt-1">
                Balance: <span className="text-blue-400">63,790</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button text={'SWAP TOKENS'} styles={'w-64'} />
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
