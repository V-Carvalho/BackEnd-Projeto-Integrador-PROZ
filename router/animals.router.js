const router = require("express").Router();
const animal = require("../controller/animals.controller"); 

router.get("/getAllAnimalsOng", animal.getAllAnimalsOng);
router.get("/getAllAnimalsOwner", animal.getAllAnimalsOwner);
router.post("/createAdoptionOrder", animal.createAdoptionOrder);
router.get("/resetAdoptionOrders", animal.resetAdoptionOrders);
router.get("/getAllAnimalsLostFound", animal.getAllAnimalsLostFound);
router.post("/getAnimalsFiltered", animal.getAnimalsFiltered);

module.exports = router;