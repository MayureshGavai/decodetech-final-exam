const express = require('express')
const {upload} = require('../middlewares/multer.middleware')

const { postItemsController, getItemController } = require('../controllers/item.controller')

const router = express.Router()


router.get('/getitems',getItemController)
// router.post('/postitems',
//         upload.single("file"),
//         postItemsController
//     )

router.post('/postitems',postItemsController)


module.exports = router

