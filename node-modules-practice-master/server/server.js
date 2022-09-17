const http=require('http')
const service=require('../service/service')
const lodash=require('lodash')

const server=http.createServer((req,res)=>{
    const result= service.add(45,78)
    // console.log(result);
    let arr=[1,2,3,4]
    let arr1=[5,6,7,8,9]
    let result2=lodash.concat(arr,arr1)

    res.write(`${result.toString()}     ${result2.toString()}`)
    res.end()
})

server.listen(2000)