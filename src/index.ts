import express from 'express'
import cors from 'cors'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())
api.use(cors())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)
api.get('/', urlController.getAll)
api.delete('/:hash', urlController.delete)

api.listen(5000, () => console.log('Express listening'))
