import React, { Component } from "react";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
// import SearchResults from "../components/SearchResults/SearchResults";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import "@babel/polyfill";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    searchResults: []
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
          search: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const results = this.state.employees.filter(employee => employee.contains(this.state.search))
      .then(
        this.setState({
          searchResults: results,
        })
      )
      .catch((err) => {
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmitForm={this.handleSubmitForm}
        />
        ,
        <Container>
          <Row>
            <Col size="md-12">
              {this.state.employees.map((employee) => {
                return (
                  <Row>
                    <Col size="md-2">
                      <img
                        alt="portrait"
                        src={employee.picture.medium}
                        key={employee.id.value}
                      ></img>
                    </Col>
                    <Col size="md-2">
                      <p key={employee.id.value}>
                        {employee.name.first} {employee.name.last}
                      </p>
                    </Col>
                    <Col size="md-3">
                      <p key={employee.id.value}>{employee.email}</p>
                    </Col>
                    <Col size="md-2">
                      <p key={employee.id.value}>{employee.cell}</p>
                    </Col>
                    <Col size="md-2">
                      <p key={employee.id.value}>
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
