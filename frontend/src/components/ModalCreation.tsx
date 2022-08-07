const ModalCreation = () => {
  return (
    <>
      <h1 className="flex justify-center mt-8 mb-4">
        Informe os dados necessários
      </h1>
      <form className="flex flex-col w-full h-3/5 justify-around items-center gap-4">
        <input type="month" className="text-black w-2/4 p-2 rounded-md" />
        <input
          type="text"
          placeholder="Descrição"
          className="text-black w-2/4 p-2 rounded-md "
        />
        <input
          type="number"
          placeholder="Valor"
          className="text-black w-2/4 p-2 rounded-md"
        />
        <div className="flex w-full justify-center gap-8">
          <div className="flex flex-col gap-4">
            <input
              type="radio"
              id="ganho"
              name="receita"
              value="ganho"
              className="text-black scale-[2]"
            />
            <label htmlFor="ganho">Ganho</label>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="radio"
              id="gasto"
              name="receita"
              value="gasto"
              className="text-black scale-[2]"
            />
            <label htmlFor="gasto">Gasto</label>
          </div>
        </div>
        <button
          type="submit"
          className="w-auto py-2 px-10 rounded-lg bg-sky-500 hover:bg-sky-700 transition-colors"
        >
          Salvar
        </button>
      </form>
    </>
  );
};

export default ModalCreation;
