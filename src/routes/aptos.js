const express = require("express");
const router = express.Router();

const Apto = require("../models/Apto");

router.get("/", async (req, res) => {
  const apto = await Apto.find().lean(); //Importante
  //.lean para evtar el error de handlebars
  res.render("index", { apto });
});

router.get("/aptos/filter", async (req, res) => {
  let response = req.query;
  // let responseNumber = response.map(function(element){
  //     return parseFloat(element)
  // })
  //  response = response.forEach(element => {
  //     element = parseFloat(element)
  // });
  let { max, min, hab } = response;
  max = parseFloat(max);
  min = parseFloat(min);
  hab = parseInt(hab);
  if (response) {
    try {
      const apto = await Apto.find({
        Precio: {
          ...(max ? { $lte: max } : {}),
          ...(min ? { $gte: min } : {}),
        },
        ...(hab ? { Habitaciones: hab } : {}),
      }).lean();
      if (apto.length > 0) {
        res.render("index", { apto, response });
      } else {
        let nofound = true;
        res.render("index", { nofound,response });
      }
    } catch (err) {
      const apto = await Apto.find({
        ...(hab ? { Habitaciones: hab } : {}),
      }).lean();
      if (apto.length > 0) {
        res.render("index", { apto, response });
      } else {
        let nofound = true;
        res.render("index", { nofound,response });
      }
    }
  }
});
module.exports = router;
