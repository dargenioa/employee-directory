import React, { Component } from "react";
// import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
// import SearchResults from "../components/SearchResults/SearchResults";
// import Row from "../components/Row/Row";
// import Col from "../components/Col/Col";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    error: "",
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
        })
      )
      .catch((err) => console.log(err));
  };

  // handleInputChange = (event) => {
  //   this.setState({
  //     search: event.target.value,
  //   });
  // };

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
      <div>
        <SearchForm />,
        <ul>
          {this.state.employees.map((employee) => {
            return <li key={employee.email}>{employee.name.first}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
