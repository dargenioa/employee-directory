import React, { Component } from "react";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getEmployeeData()
      .then((res) =>
        this.setState({
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

//   handleSubmitForm = (event) => {
//     event.preventDefault();
//     API.getEmployeeData(this.state.search)
//       .then((res) => {
//         this.setState({
//           results: res.data.results,
//           error: "",
//         });
//       })
//       .catch((err) =>
//         this.setState({
//           error: err.message,
//         })
//       );
//   };

  render() {
    return (
      <Container>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          employees={this.state.employees}
        />
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Search;