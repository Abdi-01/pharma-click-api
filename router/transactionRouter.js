const express = require("express");
const { readToken } = require("../config");
const router = express.Router();
const { transactionController } = require("../controller");

router.post("/shipping-cost", transactionController.shippingCost);
router.post("/checkout", readToken, transactionController.checkoutTransactions);

module.exports = router;