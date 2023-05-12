import  { ReactNode } from 'react';

interface CardInfoProps {
    children: ReactNode;
  }

const CardInfo = ({ children } : CardInfoProps) => {
  return (
    <div className="flex justify-center pt-5 px-96 m-36">
      <div className="p-5 bg-black rounded-lg h-full shadow-lg shadow-violet-500/100">
        {children}
      </div>
    </div>
  );
};

export default CardInfo;