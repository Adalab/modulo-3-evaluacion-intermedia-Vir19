function AddQuote() {
  return (
    <>
      <h1 className="title2">Añadir una nueva frase</h1>
      <form className="formAdd">
        <div className="flexy">
          <legend className="legendAdd">Frase</legend>
          <input type="text" value="" />
        </div>
        <div className="flexy">
          <legend className="legendAdd">Personaje</legend>
          <input type="text" value="" />
        </div>
        <button className="btnAdd">Añadir una nueva frase</button>
      </form>
    </>
  );
}

export default AddQuote;
