const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

// определяем путь до файла json
currentPath = (obj,format) => path.resolve(__dirname,`${obj}.${format}`)

// слушаем порт
const server = app.listen(PORT,(e)=>{
  if (e) return console.log(`Error ${e}`)
  else console.log(`connected ${PORT}`);
})

app.use(cors({origin:'*'}))

// роут возвращает список машин
app.get('/cars',(req,res)=>{
  res.sendFile(currentPath('warehouses','json'))
})