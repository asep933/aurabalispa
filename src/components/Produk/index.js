import Card from "../Card";

const Produk = () => {
  return (
    <div
      id="service"
      className="bg-primary text-black px-8 flex items-center justify-center"
    >
      <div className="flex items-center flex-col py-16">
        <h2 className="text-4xl font-semibold w-full text-center">Gallery</h2>

        <div className="pt-16 fkex">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Produk;
