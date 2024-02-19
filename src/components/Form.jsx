import PropTypes from "prop-types";

function Form({ handleFilterQuote, setFilterCharacter }) {
  const handleInput = (event) => {
    handleFilterQuote(event.currentTarget.value);
  };

  const handleCharacterChange = (event) => {
    setFilterCharacter(event.currentTarget.value);
  };

  return (
    <form className="form">
      <legend className="legend">Filtrar por frase</legend>
      <input className="inputFilter" type="text" onInput={handleInput} />
      <legend className="legend">Filtrar por personaje</legend>
      <select
        className="select"
        name="Personajes"
        onChange={handleCharacterChange}
      >
        <option value="all">Todos</option>
        <option value="Joey">Joey</option>
        <option value="Ross">Ross</option>
        <option value="Phoebe">Phoebe</option>
        <option value="Rachel">Rachel</option>
        <option value="Chandler">Chandler</option>
        <option value="Monica">Monica</option>
      </select>
    </form>
  );
}

Form.PropTypes = {
  handleFilterQuote: PropTypes.bool,
  setFilterCharacter: PropTypes.func,
};
export default Form;
