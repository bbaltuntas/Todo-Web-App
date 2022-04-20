const express = require("express")
const date = require(__dirname + "/date.js")
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.set('view engine', 'ejs');
let itemList = ["Read Book", "Study npm", "Study ML"]
let workList = []

app.get("/", (req, res) => {
    const currentDay = date.getDate()
    res.render('index', {listTitle: currentDay, newItems: itemList});
})


app.post("/", (req, res) => {
    let newItem = req.body.newItem


    if (req.body.list === "Work List") {
        if (newItem.trim() === "") {

        } else {
            workList.push(newItem)
        }
        res.redirect("/work")
    } else {
        if (newItem.trim() === "") {

        } else {
            itemList.push(newItem)

        }
        res.redirect("/")
    }


})

app.get("/work", (req, res) => {
    res.render("index", {listTitle: "Work List", newItems: workList})
})

app.listen(port || 3000, () => {
    console.log(`App is running on http://localhost:${port}`)
})