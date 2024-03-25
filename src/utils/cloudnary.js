const {v2} = require('cloudinary');
const { error } = require('console');
const cloudinary = v2
const fs = require('fs')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY 
  });

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath){
            console.error('Could not find filePath')
            return null
        }
        // upload file on cloudinary    
        const response = await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:'auto'
            }
        )
        // file uploaded successfully
        console.log('file uploaded sucessfully on cloudinary',response.url)
        return response
    }catch(err){
        fs.unlinkSync(localFilePath)
        res.send(err)
        return null
    }
}
