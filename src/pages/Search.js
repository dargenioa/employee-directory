import React, { Component } from "react";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";

//creating class component for search
class Search extends Component {
  state = {
    search: "",
    employees: [],
    searchResults: [],
  };

//render a list of 100 random generated users
  componentDidMount() {
    this.getEmployees(100);
  }

  // //function for api call to set the state of employees and
  // search results to the same array of users
  getEmployees = (query) => {
    API.getEmployeeData(query)
      .then((res) =>
        this.setState({
          employees: res.data.results,
          searchResults: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  //handles the change of state to get the search term
  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  
// //handles the click event to filter through employees and update the state of
// searchResults based on the search term
  handleSubmitForm = (event) => {
    event.preventDefault();
    const results = this.state.employees.filter((employee) => {
      return (
        employee.name.first.includes(this.state.search) ||
        employee.name.last.includes(this.state.search) ||
        employee.email.includes(this.state.search) ||
        employee.location.city.includes(this.state.search) ||
        employee.location.state.includes(this.state.search) ||
        employee.cell.includes(this.state.search)
      );
    });
    console.log(results);
    this.setState({
      searchResults: results,
    });
  };

  //hanlde the  onClick to sortusersbyfirst name a-z
  handleSort = (event) => {
    event.preventDefault();
    const sortEmployees = this.state.searchResults.sort((a, b) => {
      return a.name.first.localeCompare(b.name.first);
    });
    console.log(sortEmployees);
    this.setState({
      searchResults: sortEmployees,
    });
  };

  // //hanldes the click event to change the search term  and searchResults to
  // the beginning to starta new search on the existing array saved to employees
  newSearch = (event) => {
    event.preventDefault();
    this.setState({
      search: "",
      searchResults: this.state.employees,
    });
  };

  // //this renders the table of employees saved to searchResults that is never empty
  // and includes the same array as the employee's array or the filters employees based
  // on search using .map
  // using the grid in bootstrap for the table allows it to be mobile responsive
  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmitForm={this.handleSubmitForm}
          handleSort={this.handleSort}
          newSearch={this.newSearch}
        ></SearchForm>
        <Container>
          <Row>
            <Col size="md-12">
              {/* table header */}
              <Row style={{backgroundColor: "rgb(158, 52, 235)", padding: "0px", marginBottom: "10px", }}>
                <Col size="md-1">
                  <div>
                    <h3 style={{color: "white"}}>Image</h3>
                  </div>
                </Col>
                <Col size="md-3">
                  <div>
                    <h3 style={{color: "white"}}>Name</h3>
                  </div>
                </Col>
                <Col size="md-3">
                  <div>
                    <h3 style={{color: "white"}}>Email</h3>
                  </div>
                </Col>
                <Col size="md-3">
                  <div>
                    <h3 style={{color: "white"}}>Cell</h3>
                  </div>
                </Col>
                <Col size="md-2">
                  <div>
                    <h3 style={{color: "white"}}>Location</h3>
                  </div>
                </Col>
              </Row>
              {this.state.searchResults.map((employee) => {
                return (
                  <Row id="results">
                    <Col size="md-1">
                      <img
                        className="border border-dark rounded"
                        alt="portrait"
                        src={employee.picture.medium}
                        key={employee.login.uuid}
                        style={{ marginBottom: "10px" }}
                      ></img>
                    </Col>
                    <Col size="md-3">
                      <p key={employee.login.uuid}>
                        {employee.name.first} {employee.name.last}
                      </p>
                    </Col>
                    <Col size="md-3">
                      <p key={employee.login.uuid}>{employee.email}</p>
                    </Col>
                    <Col size="md-3">
                      <p key={employee.login.uuid}>{employee.cell}</p>
                    </Col>
                    <Col size="md-2">
                      <p key={employee.login.uuid}>
                        {employee.location.city}, {employee.location.state}
                      </p>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
