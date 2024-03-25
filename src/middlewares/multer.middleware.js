    const multer = require('multer')
    // const path = require('./')

    const storage = multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"./public/temp")
        },
        filename : function(req,file,cb){
            cb(null,file.originalname)
        }
    })

    module.exports = {
        upload : multer({ storage: storage})
    }