import axios from "axios";
//API link - no API key needed. visitn the random user generator documentation for more information
const BASEURL = "https://randomuser.me/api/?results=";
//This only renders users located in the US
const US = "&nat=us"

//emplort the function to use the API key
//the query is a number paramter to render up to 5,000 users
export default {
  getEmployeeData: function (query) {
    return axios.get(BASEURL + query + US);
  },
};
