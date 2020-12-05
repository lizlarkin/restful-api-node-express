// Setup
const router = require("express").Router();

// routes
router.get("/", (req, res) => {
    console.log("we have been hit");
    res.json({
        msg:"Success", 
        status: 200, 
        data: {user:"Liz", title: "me"},
});
})

router.get("/isActive", (req, res) => {
    console.log("we have been hit");
    res.json({
        msg:"Success", 
        status: 200, 
        data: {active: true},
});
})

router.put("/putExample", (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    res.json({
        msg:"success", 
        status: 200, 
        data: {id: id},
});
})

router.put("/putLiz", (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const tired = req.body.tired;
    const title = req.body.title;
    res.json({
        msg:"success", 
        status: 200, 
        data: {name: name, age: age, tired: tired, title: title},
});
})

router.post("/queryString", (req, res) => {
    console.log(req.query);
    res.json(req.query)
});

router.patch("/parameter/:hash/:name", (req, res) => {  //hash could be anything
    console.log(req.params);
    res.json({msg: "success"});
});

router.patch("/parameterLiz/:husband/:puppy", (req, res) => {  //hash could be anything
    console.log(req.params);
    res.json({msg: "success"});
});


// export
module.exports = router;
