const router = require("express").Router();
const animal = require("../controller/animals.controller"); 

router.get("/getAllAnimalsOng", animal.getAllAnimalsOng);
router.get("/getAllAnimalsOwner", animal.getAllAnimalsOwner);
router.post("/createAdoptionOrder", animal.createAdoptionOrder);




// router.get("/findCompany/:id", company.findCompany);

// router.put("/updateCompany/:id", company.updateCompany)

// router.get("/deleteCompany/:id", company.deleteCompany);

module.exports = router;