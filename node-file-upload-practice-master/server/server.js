const http=require('http')
const formidable=require('formidable')
const path = require('path')
const fs = require('fs')

const server=http.createServer((req,res)=>{
    if(req.url=='/login' && req.method=="POST"){
        var form =new formidable.IncomingForm()
        form.parse(req,(err,fields,files)=>{
            // console.log(files.img.originalFilename);

            if(fields.username=='yaseen' & fields.password=='pass'){
                res.write("welcome yaseen")
                const oldpath=files.img.filepath
                const newPath=path.join(__dirname,"uploads",files.img.originalFilename)
                const rawdata=fs.readFileSync(oldpath)
                fs.writeFile(newPath,rawdata,(err,data)=>{
                    if(err){
                        console.log(err);
                        res.write(err)
                        res.end()
                    }
                    else{
                        res.write('file uploaded')
                        res.end()
                    }
                })
                
                

            }
            else{
                res.write("login denied")
                res.end()
            }
        })
        // res.write("adjfdk")
        // res.end()

    }

})

server.listen(3000)