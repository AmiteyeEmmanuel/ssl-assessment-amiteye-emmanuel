import Content from "./content";
import InputForm from "./form";

export default function Main() {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      <div className="order-2 lg:order-1 lg:w-1/2 w-full">
         <InputForm />
      </div>

      <div className="order-1 lg:order-2 lg:w-1/2 w-full">
        <Content />
      </div>
    </section>
  );
}
