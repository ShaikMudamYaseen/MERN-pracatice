const axios=require('axios')
const basePath="http://localhost:4000/books"
const getData=async()=>{
    return await axios.get(basePath)
}
const postData=async(data)=>{
    return await axios.post(basePath,data)
}
const deleteBook=async(id)=>{
    return await axios.delete(`${basePath}/${id}`)

}

module.exports={
    getData,
    postData,
    deleteBook
}