import list from "./list";
import Item from "./item";

export default function Page() {
  return (
    <section className="max-w-xl  px-4 py-12 sm:py-20 mx-auto">
      <h1 className="text-black text-3xl capitalize text-center font-semibold mb-16 sm:mb-24">
        Tools
      </h1>
      <div className="space-y-6">
        {list.map((item, index) => {
          return <Item item={item} index={index} />;
        })}
      </div>
    </section>
  );
}
