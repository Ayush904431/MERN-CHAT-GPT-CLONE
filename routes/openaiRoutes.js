const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openiaController");

const router = express.Router();

//route
router.post("/summaries", summaryController);
router.post("/paragraphs", paragraphController);
router.post("/chatbots", chatbotController);
router.post("/js-converters", jsconverterController);
router.post("/scifi-images", scifiImageController);

module.exports = router;
