import React, { Component } from "react";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";


class Search extends Component {
  state = {
    search: "",
    employees: [],
    searchResults: [],
  };

  // componentDidMount() {
  //   // axios.get("https://randomuser.me/api/?results=50")
  //   // .then(res => {
  //   //   console.log(res.data.results);
  //   // })
  // }

  componentDidMount() {
    this.getEmployees(100);
  }

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

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  //   .then()
  //     const results = this.state.employees.filter(employee => {
  //       let searchEmployee = Object.values(employee)
  //       .join("")
  //       .toLowerCase();
  //       return searchEmployee.indexOf(this.state.search.toLowerCase() !== -1);
  //     })
  //     .then(
  //       this.setState({
  //         searchResults: results
  //       })
  //     )
  // };

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

  newSearch = (event) => {
    event.preventDefault();
    this.setState({
      search: "",
      searchResults: this.state.employees,
    });
  };

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
