import { Facebook, Google } from "../assets";

export default function Button() {
  return (
    <section>
      <div className="relative top-10  bg-transparent border text-[#67728A] w-full h-[55px] rounded-full flex items-center text-center justify-around px-8">
        <img src={Google} alt="google" className="w-[26.35px]" />

        <p className="text-center w-full">Continue with Google</p>
      </div>

      <div className="relative top-[60px]  bg-transparent border text-[#67728A] w-full h-[55px] rounded-full flex items-center text-center justify-around px-8">
        <img src={Facebook} alt="google" className="w-[26.35px]" />

        <p className="text-center w-full">Continue with Facebook</p>
      </div>
    </section>
  );
}
