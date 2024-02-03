function Form() {
  return (
    <form className="form">
      <legend className="legend">Filtrar por frase</legend>
      <input className="inputFilter" type="text" />
      <legend className="legend">Filtrar por personaje</legend>
      <select className="select" name="Personajes">
        src/scss/App.scss
        <option value="">Todos</option>
        <option value="">Joey</option>
        <option value="">Ross</option>
        <option value="">Phoebe</option>
        <option value="">Rachel</option>
        <option value="">Chandler</option>
        <option value="">Monica</option>
      </select>
    </form>
  );
}

export default Form;
