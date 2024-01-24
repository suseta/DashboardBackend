const express = require('express');
const router = express.Router();

const {getAllProducts,getAllIntensity,getAllLikelihood,getAllRelevance,getAllYear,getAllCountry,getAllTopics,getAllRegion} =require("../controllers/products")
router.route("/").get(getAllProducts);
router.route("/intensity").get(getAllIntensity);
router.route("/likelihood").get(getAllLikelihood);
router.route("/relevance").get(getAllRelevance);
router.route("/year").get(getAllYear);
router.route("/country").get(getAllCountry);
router.route("/topics").get(getAllTopics);
router.route("/region").get(getAllRegion);


module.exports = router;
