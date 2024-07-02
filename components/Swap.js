import Image from "next/image";
import React from "react";
import UniSwapConvertor from "./uniSwapConvertor";

const Swap = () => {
  return (
    <div >
      <div className="backdrop-blur-sm bg-[#000000]/30   text-white bg-opacity-50 p-6 rounded-xl  border border-gray-500 w-full">

        <div className="flex justify-between mb-10 items-center">
          <div className="font-semibold text-xl">SWAP TOKENS</div >
          <Image
            src="/assets/SettingIcon.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>




        <div className="flex gap-1">
          <div className='container p-4 rounded-l-md  bg-secondary flex ' >
            <div>
              <div>asdas</div>
              <div>asdas</div>

            </div>


          </div>
          {/* wanna place in the middle with z index */}
          <div className="mx-4 z-40">
            <img src="/assets/swap.svg" alt="Swap Icon" className="w-8 h-8" />
          </div>

          <div className='container p-4 rounded-r-md  bg-secondary flex justify-between ' >
            <div className="flex flex-col justify-start">

              <p className="text-4xl">0.00</p>
              <p className="text-gray-400">$0.00</p>
            </div>
            <div className="flex flex-col justify-start">

              <div className="bg-black px-4 py-2 flex  items-center gap-2" >
                <img src="/assets/swap.svg" alt="Swap Icon" className="w-8 h-8" />
                <p>
                  BTC  <i class="fa fa-angle-right text-secondary" aria-hidden="true"></i>
                </p>

              </div>
              <p className="text-gray-400">Balance: <span className="text-blue-400">63,790</span></p>

            </div>



          </div>
        </div>





        <div className="bg-secondary text-white p-6 rounded-lg flex items-center justify-between mb-10">
          <div className="flex-1 text-center">
            <p className="text-4xl">0.00</p>
            <p className="text-gray-400">$0.00</p>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <div className="text-center">
              <div className="bg-black p-2 rounded-md inline-block">
                <p>BTC</p>
              </div>
              <p className="text-gray-400">Balance: <span className="text-blue-400">24,240</span></p>
            </div>
            <div className="text-center">
              <div className="bg-black p-2 rounded-md inline-block">
                <p>BNB</p>
              </div>
              <p className="text-gray-400">Balance: <span className="text-blue-400">63,790</span></p>
            </div>
          </div>
          <div className="flex-1 text-center">
            <p className="text-4xl">0.00</p>
            <p className="text-gray-400">$0.00</p>
          </div>
        </div>
        {/* 



 */}





        {/* 
        <div className="bg-card text-white p-4 rounded-lg flex items-center justify-between space-x-4">
      <div className="flex-1 text-center border-r border-gray-600">
        <p className="text-4xl">0.00</p>
        <p className="text-gray-400">$0.00</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="text-center">
          <div className="bg-black p-2 rounded-md inline-block mb-1">
            <p>BTC</p>
          </div>
          <p className="text-gray-400">Balance: <span className="text-blue-400">24,240</span></p>
        </div>
        <div className="text-center">
          <div className="bg-black p-2 rounded-full">
            <img src="/swap-icon.png" alt="Swap Icon" className="w-6 h-6" />
          </div>
        </div>
        <div className="text-center">
          <div className="bg-black p-2 rounded-md inline-block mb-1">
            <p>BNB</p>
          </div>
          <p className="text-gray-400">Balance: <span className="text-blue-400">63,790</span></p>
        </div>
      </div>
      <div className="flex-1 text-center border-l border-gray-600">
        <p className="text-4xl">0.00</p>
        <p className="text-gray-400">$0.00</p>
      </div>
    </div> */}







        <div className="flex justify-between items-center ">
          <div className="font-normal text-lg" >
            <p>1 BTC = 32.4039 ETH</p>
            <p className="text-[#3980FF]">Free exchage</p>
          </div >
          <div className="font-normal text-lg text-[#666666]" >
            <p>Updates in 4s</p>
          </div >
        </div>



      </div>
    </div>
  );
};

export default Swap;
