import Card from "./components/Card";
import ModalCreation from "./components/ModalCreate";
import { PlusCircle, XCircle } from "phosphor-react";
import { useState, useEffect } from "react";
import { getAllTasks } from "./api/taskApi";
import Modal from "react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const callApi = async () => {
      const response = await getAllTasks();
      setTasks(response.data);
    };
    callApi();
  }, []);

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
              Saldo:<span className="text-green-400">R$180,00</span>
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
          <div className="overflow-auto">
            {tasks.map((task: any) => {
              return (
                <Card
                  key={task.id}
                  id={task.id}
                  description={task.descriptions}
                  value={task.money}
                  positive={task.positive}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
