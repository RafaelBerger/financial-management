import Card from "./components/Card";
import { PlusCircle } from "phosphor-react";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <main className="bg-pers-100 w-3/4 h-[90%] rounded-[15px] flex flex-col p-8 pt-4">
          <div className="w-full h-12 flex justify-center items-center">
            julho de 2022 (data temporária)
          </div>
          <div className="bg-gray-800 w-full h-auto flex justify-evenly mt-2 mb-2 rounded-md py-1">
            <p className="text-base">Itens: 20</p>
            <p className="text-base">
              Receitas: <span className="text-green-400">R$200,00</span>
            </p>
            <p className="text-base">
              Despesas: <span className="text-red-600">R$20,00</span>
            </p>
            <p className="text-base">
              Saldo: <span className="text-green-400">R$180,00</span>
            </p>
          </div>
          <div className="w-full h-auto flex justify-center">
            <PlusCircle
              size={55}
              color="#52b2db"
              weight="fill"
              className="cursor-pointer mt-4 mb-8"
            />
          </div>
          <Card
            id={1}
            description="Cerveja no mercado"
            value={14.0}
            positive={false}
          />
          <Card id={2} description="Freela" value={1000} positive={true} />
          <Card id={3} description="Teclado" value={200.0} positive={false} />
          <Card id={4} description="Chocolate" value={100.0} positive={false} />
          <Card id={5} description="Trampo" value={3500.0} positive={true} />
        </main>
      </div>
    </>
  );
}

export default App;
