import { useState } from "react";
import { updateTaskApi } from "../api/taskApi";

interface modalUpdateProps {
  id: number;
  fetchUpdate: Function;
  fechaModal: Function;
}

const ModalUpdate = (props: modalUpdateProps) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputRadio, setInputRadio] = useState("");
  const [inputDate, setInputDate] = useState("");

  function handleInputText(e: any) {
    setInputText(e.target.value);
    console.log(inputText);
  }

  function handleInputNumber(e: any) {
    setInputNumber(e.target.value);
    console.log(inputNumber);
  }

  function handleInputRadio(e: any) {
    setInputRadio(e.target.value);
    console.log(inputRadio);
  }

  function handleInputDate(e: any) {
    setInputDate(e.target.value);
    console.log(inputDate);
  }
  //#region calculo data
  const dateCalendar = new Date();
  const getMonth = dateCalendar.getMonth() + 1;
  const monthFormated = getMonth < 10 ? `0${getMonth}` : `${getMonth}`;
  const year = dateCalendar.getFullYear();
  //#endregion

  const updateTask = async (id: modalUpdateProps) => {
    props.fechaModal();
    if (
      inputText === "" ||
      inputNumber === "" ||
      inputRadio == "" ||
      inputDate == ""
    ) {
      return "";
    } else {
      await updateTaskApi(id, inputText, inputNumber, inputRadio, inputDate);
      console.log("teste func update");
      console.log(id, inputText, inputNumber, inputRadio, inputDate);

      setInputDate("");
      setInputText("");
      setInputRadio("");
      setInputNumber("");
    }
  };

  return (
    <>
      <h1 className="flex justify-center mt-8 mb-4">
        Informe os dados para atualizar o card
      </h1>
      <form className="flex flex-col w-full h-3/5 justify-around items-center gap-4">
        <input
          type="month"
          max={`${year}-${monthFormated}`}
          className="text-black w-2/4 p-2 rounded-md"
          onChange={handleInputDate}
        />
        <input
          type="text"
          placeholder="Descrição"
          className="text-black w-2/4 p-2 rounded-md "
          onChange={handleInputText}
        />
        <input
          type="number"
          placeholder="Valor"
          className="text-black w-2/4 p-2 rounded-md"
          onChange={handleInputNumber}
        />
        <div
          className="flex w-full justify-center gap-8"
          onChange={handleInputRadio}
        >
          <div className="flex flex-col gap-4">
            <input
              type="radio"
              id="ganho"
              name="receita"
              value="true"
              className="text-black scale-[2]"
            />
            <label htmlFor="ganho">Ganho</label>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="radio"
              id="gasto"
              name="receita"
              value="false"
              className="text-black scale-[2]"
            />
            <label htmlFor="gasto">Gasto</label>
          </div>
        </div>
        <button
          type="submit"
          className="w-auto py-2 px-10 rounded-lg bg-sky-500 hover:bg-sky-700 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            updateTask(props.identificadorUpdate);
            console.log("teste botão salvar");

            props.fetchUpdate();
          }}
        >
          Salvar Alterações
        </button>
      </form>
    </>
  );
};

export default ModalUpdate;
