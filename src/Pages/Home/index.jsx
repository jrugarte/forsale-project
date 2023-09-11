import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/layout";
import Card from "../../Components/card";
import ProductDetail from "../../Components/ProductDetail";
import MessageCard from "../../Components/MessageCard";

function Home() {
  // usamos el useState para traer los valores de la api y luego setearlos:
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>No hay productos que coincidan con la busqueda.</div>;
    }
  };

  return (
    <Layout>
      <div className="sticky m-2 left-1/2">
        <p>Our Best Products</p>
      </div>
      <div className="absolute grid grid-flow-col grid-rows-2 gap-4 pr-10 top-20 left-10">
        {renderView()}
      </div>
      <ProductDetail />
      <div
        className={`${
          context.mostrarMessage ? "flex flex-col" : "hidden"
        } fixed z-40 w-screen p-1 text-white shadow-md h-screen bg-black/70`}
      >
        {<MessageCard />}
      </div>
    </Layout>
  );
}

export default Home;
