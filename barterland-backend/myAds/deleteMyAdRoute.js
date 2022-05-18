/*
 * @author Hirva Patel hirva.patel@dal.ca
 * */
const req = require("express/lib/request");
const res = require("express/lib/response");

var mongo = require("../mongo");
const express = require("express");
const app = express();

//use json body for the route
app.use(express.json());
const router = express.Router();

//delete endpoint to remove the advertisements from the database
router.delete("", (req, res) => {
  const filter = { ad_id: req.body.ad_id };
  // this option instructs the method to create a document if no documents match the filter
  mongo.connectDB(async (err) => {
    if (err) throw err;

    //connect to the mongo database
    const db = mongo.getDatabase();
    const adsCollection = db
      .collection("advertisments")
      .remove(filter)
      .then((results) => {
        return res.status(200).json({
          message: "Document deleted",
          success: true,
          data: results.value,
        });
      })
      .catch((error) => console.error(error));

    //handle the not found error for the api
    app.use(function (req, res) {
      res.status(404);
      const response = {
        message:
          "No mapping found for the requested resource - " + req.originalUrl,
        success: false,
      };
      res.json(response);
      return;
    });
  });
});

module.exports = router;
