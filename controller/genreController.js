const genreList = [
    {name: "Fantasy"}
  ];

exports.index = (req,res,next)=>{
    res.render("index",{genres: genreList} )
}

exports.genreCreateGet = (req,res,next)=>{
    console.log("WIP")
}
exports.genreCreatePost = (req,res,next)=>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}

exports.genreUpdateGet = (req,res,next)=>{
    console.log("WIP")
}
exports.genreUpdatePost = (req,res,next)=>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}
exports.genreCreatePost = (req,res,next)=>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}
exports.genreDeletePost = (req,res) =>{
    console.log("WIP")
    console.log("username to be saved: ", req.body.username)
}
