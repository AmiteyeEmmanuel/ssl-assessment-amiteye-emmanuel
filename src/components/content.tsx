import { ContentInfo, LeftIcon, RightIcon } from "../assets";

export default function Content() {
    return (
      <section className="bg-[#1C4532] w-full pt-10 pb-20 relative overflow-hidden">
        <div className="items-center justify-center">
          <div className="text-[#FFF] text-center">
            {/* <img className=""  src={FemaleIcon} alt="femaleIcon"/> */}
            <p>Support</p>
          </div>
  
          {/* Circle background element */}
          <div className="circle rounded-full bg-[#F7FAFC] w-[803.19px] h-[792.79px] absolute bottom-[28rem] z-0 opacity-20 right-[-22rem]" />
  
          {/* Content Info */}
          <div className="justify-center items-center mx-auto flex mt-40 relative z-10">
            <img src={ContentInfo} className="w-[60%]" alt="" />
          </div>
  
          {/* Navigation Dots and Icons */}
          <div className="flex justify-center mt-20 gap-6 relative z-10">
            <img src={LeftIcon} alt="left" />
            <div className="bg-white h-[4px] w-[4px] rounded-full opacity-15" />
            <div className="bg-white h-[7px] w-[7px] rounded-full" />
            <div className="bg-white h-[4px] w-[5px] rounded-full opacity-15" />
            <img src={RightIcon} alt="right" />
          </div>
        </div>
      </section>
    );
  }
  