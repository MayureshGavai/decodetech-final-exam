const itemModel = require('../model/item.model')

const getItemController = async (req, res) => {
    try {
      const items = await itemModel.find();
      res.status(200).send(items);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
};


const postItemsController = async (req, res) => {
    try {
      const { name, price, category,description, image } = req.body;
      if (!name || !price || !category || !description || !image) {
          return res.status(400).json({ message: 'All fields are required' });
      }

      const newItem = new itemModel({
          name: name,
          price: price,
          category: category,
          description : description,
          image: image
      });
      await newItem.save();
      res.status(200).json({ message: 'New Item Added Successfully!' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
  };


module.exports = {getItemController,postItemsController}