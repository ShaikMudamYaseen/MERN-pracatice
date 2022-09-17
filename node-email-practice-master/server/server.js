const http=require('http')
const nodemailer=require('nodemailer')

http.createServer((req , res)=>{
    if(req.url=='/sendMail'){
    const transpoter=nodemailer.createTransport({
        service:"outlook",
        auth:{
            user:"mrdummy86@outlook.com",
            pass:"Dummy@123"
        }
        
    })
    const mailList=["dummymr86@gmail.com","mrdummy86@outlook.com"]
    const details={
        from:"mrdummy86@outlook.com",
        to:mailList,
        subject:"test mail",
        text:"testing mail from nodemailer",
        html:"<h1>styled text</h1>"
    }

    transpoter.sendMail(details,(err)=>{
        if(err){
            console.log(err);
            res.write(err)
            res.end()
        }
        else{
            res.write("mail sent")
            res.end()
        }
    })
}
}).listen(3000)