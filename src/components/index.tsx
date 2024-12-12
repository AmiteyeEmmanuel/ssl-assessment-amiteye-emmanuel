import Content from "./content";
import InputForm from "./form";

export default function Main() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-[880px]">
      <div className="order-2 lg:order-1 lg:w-1/2 w-full h-full">
         <InputForm />
      </div>

      <div className="order-1 lg:order-2 lg:w-1/2 w-full h-[880px] pb-20 bg-[#1C4532]">
        <Content />
      </div>
    </section>
  );
}
