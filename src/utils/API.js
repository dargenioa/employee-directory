import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";
const US = "&nat=us"


export default {
  getEmployeeData: function (query) {
    return axios.get(BASEURL + query + US);
  },
};
