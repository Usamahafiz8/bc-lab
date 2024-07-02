import Image from "next/image";
import Button from "./Button";


const Header = () => {
  return (
    <header className="bg-transparent p-6 text-white z-50">
      <div className="container mx-auto flex relative z-10 justify-between items-center">
        <Image
          src="/assets/BlockChainLogo.svg"
          alt="Logo"
          width={150}
          height={150}
        />
        <div className="flex items-center space-x-4">
          <nav className="space-x-6">
            <a href="#" className="text-white hover:text-gray-light">
              Exchange
            </a>
            <a href="#" className="text-white hover:text-gray-light">
              Last Transactions
            </a>
            <a href="#" className="text-white hover:text-gray-light">
              Trade
            </a>
            <a href="#" className="text-white hover:text-gray-light">
              Notifications
            </a>
          </nav>
        </div>
        <div className="space-x-4">
          <Button text="LOG IN" type="secondary" />
          <Button text="SIGN UP" type="primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
