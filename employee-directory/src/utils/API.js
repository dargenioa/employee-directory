import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";


export default {
  getEmployeeData: function (query) {
    return axios.get(BASEURL + query);
  },
};
