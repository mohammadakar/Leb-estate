const { createListing, deleteListing, updateListing, getListing, getListings } = require("../controllers/listingController");
const { verifyToken } = require("../utils/verifyUser");

const router=require("express").Router();


router.post('/create',verifyToken,createListing);
router.delete('/delete/:id',verifyToken,deleteListing);
router.put('/update/:id',verifyToken,updateListing);
router.get('/get/:id',getListing);
router.get('/get',getListings)


module.exports=router;