const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

const staticPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(staticPath))

// console.log(staticPath)

app.get("",(req,res)=>{
  res.render("index")
})

app.get("/about",(req,res)=>{
  res.render("about")
})

app.get("/weather",(req,res)=>{
  res.render("weather")
})

app.get("*",(req,res)=>{
  res.render("404error",{
    errorMsg : "Oops error occured"
  })
})


app.listen(PORT,()=>{
  console.log("Listening to the PORT")
})