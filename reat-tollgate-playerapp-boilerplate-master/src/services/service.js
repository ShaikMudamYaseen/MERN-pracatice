const axios=require('axios')
const basePath="http://localhost:4000/players"
const getData=async()=>{
    return await axios.get(basePath)
}
const postData=async(data)=>{
    return await axios.post(basePath,data)
}

module.exports={
    getData,
    postData,
}