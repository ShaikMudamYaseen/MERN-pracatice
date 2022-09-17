const axios = require("axios");
const basePath = "http://localhost:5000/tasks";
const postData = async (data) => {
  console.log(data);
  return await axios.post(basePath, data);
};

const getData = async () => {
  return await axios.get(basePath);
};

const deleteData=async(id)=>{
  return await axios.delete(`${basePath}/${id}`)
}
module.exports = {
  postData,
  getData,
  deleteData
};
