let express= require("express")
const Product = require("../connectionAndSchema/product");
const router = express.Router();
router.use(express.json());
//get
router.get("/", async (req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});


router.post("/", async (req, res) => {
    try {
      let data = await Product.create(req.body)
      res.send(data);
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  // router.put("/:ppdId", async (req, res) => {
  //   try {
  //     let data = await Product.findOneAndUpdate({ppdId:req.params.ppdId},{$set: req.body})
  //     res.send(data);
  //   } catch (e) {
  //     res.status(400).json({
  //       status: "Failed",
  //       message: e.message,
  //     });
  //   }
  // });

  // router.delete("/:ppdId", async (req, res) => {
  //   try {
  //     let data = await Product.findOneAndDelete({ppdId:req.params.ppdId})
  //     res.send(data);
  //   } catch (e) {
  //     res.status(400).json({
  //       status: "Failed",
  //       message: e.message,
  //     });
  //   }
  // });

module.exports = router;