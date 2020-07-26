const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer)

data.name = "Nischit"
data.age = 23

const newJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',newJSON)
