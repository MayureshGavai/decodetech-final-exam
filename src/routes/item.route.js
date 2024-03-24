const express = require('express')

const { postItemsController, getItemController } = require('../controllers/item.controller')

const router = express.Router()


router.get('/getitems',getItemController)
router.post('/postitems',postItemsController)


module.exports = router

