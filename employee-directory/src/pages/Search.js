import React, { Component } from "react";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };

  componentDidMount() {
      
  }

}
