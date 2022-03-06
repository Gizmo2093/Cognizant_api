const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

// create port and app
const PORT = process.env.PORT || 3001
const app = express()

// get absolute path json file (reuse func)
currentPath = (obj,format) => path.resolve(__dirname,`${obj}.${format}`)

// server listen port
const server = app.listen(PORT,(e)=>{
  if (e) return console.log(`Error ${e}`)
  else console.log(`connected ${PORT}`);
})

app.use(cors({origin:'*'}))

// back json file
app.get('/cars',(req,res)=>{
  res.sendFile(currentPath('warehouses','json'))
})