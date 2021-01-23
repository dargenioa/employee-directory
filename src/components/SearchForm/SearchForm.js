import "./search.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search by First or Last Name, Email, Cell, City or State"
          id="employee"
        ></input>
        <br></br>
        <div>
          <button
            type="submit"
            onClick={props.handleSubmitForm}
            className="btn btn-dark btn-center"
            style={{backgroundColor: "rgb(158, 52, 235)"}}
          >
            Search
          </button>
        </div>
        <br>
        </br>
        <div>
          <button
            type="submit"
            onClick={props.handleSort}
            className="btn btn-dark btn-center"
            style={{backgroundColor: "rgb(158, 52, 235)"}}
          >
            Sort by Name A-Z
          </button>
        </div>
        <br>
        </br>
        <div>
          <button
            type="submit"
            onClick={props.newSearch}
            className="btn btn-dark btn-center"
            style={{backgroundColor: "rgb(158, 52, 235)"}}
          >
            Start a New Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
