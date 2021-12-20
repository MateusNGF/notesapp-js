const fs = require('fs')
const note = require('../src/note')

// const database = fs.readFileSync('./database.json')
// const dataConvert = database.toString()
// const data = JSON.parse(dataConvert)

// data.people = "Mateus"
// data.age = 66

// const convertData = JSON.stringify(data)
// fs.writeFileSync("./database.json", convertData)

// console.log(fs.readFileSync("../database.json"))

note.setConfig({ database : "../database.json"})
