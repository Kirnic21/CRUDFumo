const bookList = [
    { name: "Toaru" },
    { name:"Adachi to Shimamura"},
  ];
exports.bookList = (req,res,next)=>{
    res.render("index",{list: bookList} )
}
exports.bookCreateGet = (req,res,next)=>{
    
    res.render("addBook" )
}
exports.bookCreatePost = (req,res,next)=>{
  
    console.log("username to be saved: ", req.body.username)
}

exports.bookUpdateGet = (req,res,next)=>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}
exports.bookUpdatePost = (req,res,next)=>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}
exports.bookCreatePost = (req,res,next)=>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}
exports.bookDeletePost = (req,res) =>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}