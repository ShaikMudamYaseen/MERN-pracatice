const path=require('path')
const booksData={
    books:require('../model/books.json'),
    addBook:function(data){
        this.books=data
    }
}

const getBooks=(req,res)=>{
    res.json(booksData.books)

}
const addBooks=(req,res)=>{
    // console.log(req.body)
    console.log(booksData.books.length);
    const data={
        id:booksData.books[booksData.books.length-1].id+1,
        bookName:req.body.bookName,
        author:req.body.author
    }
    // res.send(req)
    const updatedData=[...booksData.books,data]
    booksData.addBook(updatedData)
    res.json(data)
}
const updateBook=(req,res)=>{
    // console.log(req.query);
    const targetId=req.query.id
    // console.log(targetId);
    const targetBook=booksData.books.find((emp)=>emp.id==targetId)
    if(req.body.bookName) targetBook.bookName=req.body.bookName
    if(req.body.author) targetBook.author=req.body.author
    // console.log(targetBook);
    res.json(targetBook)

}
const deleteBook=(req,res)=>{
    const targetId=req.query.id
    // console.log(targetId);
    const targetBook=booksData.books.find((emp)=>emp.id==targetId)
    const updatedBooks=booksData.books.filter(target=>target.id!=targetId)
    booksData.addBook(updatedBooks)
    
    res.json(`${targetBook.id} deleted`)
}

module.exports={
    getBooks,
    addBooks,
    updateBook,
    deleteBook
}