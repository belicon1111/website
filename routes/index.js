var express = require('express');
var router = express.Router();
const Lego = require('../models/Lego')
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const legos = await Lego.findAll()
  res.render('index', { legos });
});

router.post('/create', async function(req, res, next) {
  try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        redirect('/')
      }

      const lego = await Lego.create({
          Item: req.body.item,
          ProductName: req.body.productname,
          CollectionName: req.body.collectionname,
          Ages: req.body.ages,
          Pieces: req.body.pieces,
          Price: req.body.price,
          PictureId: null
      });

      res.redirect("/?msg=success");
  } catch (error) {
      res.redirect('/?msg='+new URLSearchParams(error.toString()).toString());
      console.log(error)
  }
});
router.get("/delete/:item", async function(req, res, next) {
  console.log(req.params.item)
  const lego = await Lego.findByPk(req.params.item)
  if(lego){
    await lego.destroy()
    res.redirect('/')
  }else{
    res.redirect('/')
  }
})
module.exports = router;
