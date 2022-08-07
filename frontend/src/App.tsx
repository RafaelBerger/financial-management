import Card from "./components/Card";
import ModalCreation from "./components/ModalCreation";
import { PlusCircle, XCircle } from "phosphor-react";
import { useState } from "react";
import testando from "./teste.js";
import Modal from "react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <div className="w-full flex justify-end">
          <XCircle
            size={36}
            color="#ffffff"
            weight="fill"
            className="cursor-pointer mr-2 mt-2"
            onClick={closeModal}
          />
        </div>
        <ModalCreation />
      </Modal>
      <div className="flex justify-center items-center w-screen h-screen">
        <main className="bg-pers-100 w-3/4 max-w-7xl h-[90%] rounded-[15px] flex flex-col p-8 pt-4">
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
              onClick={openModal}
            />
          </div>
          {testando.map((task: any) => {
            return (
              <Card
                key={task.id}
                id={task.id}
                description={task.description}
                value={task.value}
                positive={task.positive}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
