const express = require('express');
const router = express.Router();


// Welcome Page
router.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});


// Gift Page
router.get("/gift", (req, res) => {
    res.render("gift", { title: "Christmas Gift" });
});


module.exports = router;
