const express = require("express");
const router = express.Router();
import * as aptoCtrl from '../controllers/aptos.controller'


router.get("/aptos", aptoCtrl.getAptos);
router.get("/aptos/filter", aptoCtrl.filterApto);


//<------- Consulta de precios con coordenadas ---------->

router.get("/consulta", async (req, res) => {
  res.render("consulta");
});
router.post("/consulta/filter", aptoCtrl.consulta)


// <------- Página "ver más" por apto ------->

router.get('/aptos/:id', aptoCtrl.getAptoById);

module.exports = router;
