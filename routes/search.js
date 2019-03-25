var express = require("express");
var app = express();
var dataSchema = require("../models/Data");

app.get("/:search", (req, res, next) => {
    
  let search = req.params.search;
  let regex = new RegExp(search, "i");

  Promise.all([
    searchPONo(search, regex),
    searchStatusDesc(search, regex)
  ])

  searchPONo(search, regex)
    .then(dataPo => {
        res.status(200).json({
        ok: true,
        dataPo: dataPo
    });
  });

  searchStatusDesc(search, regex)
    .then(dataPo => {
        res.status(200).json({
        ok: true,
        dataPo: dataPo
    });
  });
});


function searchPONo(search, regex) {
    return new Promise((resolve, reject) => {
      dataSchema.find()
                .or([{'StatusDesc': regex}, {'SupplierName': regex}])
                .exec((err, dataP) => {
                    if (err) {
                        reject('Error al cargar usuarios', err)
                    }else {
                        resolve(dataP)
                    }
                })
    });
  }

function searchStatusDesc(search, regex) {
    return new Promise((resolve, reject) => {
      dataSchema.find({ StatusDesc: regex }, (err, dataPo) => {
        if (err) {
          reject("Error al cargar Status", err);
        } else {
          resolve(dataPo);
        }
      });
    });
  }

  function searchSupp(search, regex) {
    return new Promise((resolve, reject) => {
      dataSchema.find({ SupplierName: regex }, (err, dataPo) => {
        if (err) {
          reject("Error al cargar Supplier", err);
        } else {
          resolve(dataPo);
        }
      });
    });
  }

  function searchTransp(search, regex) {
    return new Promise((resolve, reject) => {
      dataSchema.find({ TransportMode: regex }, (err, dataPo) => {
        if (err) {
          reject("Error al cargar Transporte", err);
        } else {
          resolve(dataPo);
        }
      });
    });
  }


module.exports = app;


