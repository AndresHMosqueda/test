var express = require("express");
var dataSchema = require("../models/Data");

var app = express();

app.get("/paginate/:from", (req, res, next) => {
  from = Number(req.params.from);

  dataSchema
    .find({})
    .skip(from)
    .limit(10)
    .exec((err, dataPo) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: "Error cargando",
          errors: err
        });
      }

      console.warn(dataPo);

      res.status(200).json({
        ok: true,
        dataPo: dataPo
      });

    });
});

app.get("/totalStatusId/:searchByNumber", (req, res, next) => {
  dataSchema
    .find({ StatusId: req.params.searchByNumber }, "StatusId StatusDesc")
    .exec((err, dataPo) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: "Error cargando",
          errors: err
        });
      }

      dataSchema.count({}, (err, counter) => {
        res.status(200).json({
          ok: true,
          StatusId: dataPo[0].StatusId,
          total: dataPo.length,
          dataPo: dataPo
          //   total: counter
        });
      });
    });
});

app.get("/all", (req, res, next) => {
  let from = req.query.from || 0;
  from = Number(from);

  dataSchema
    .find({})
    .limit(10)
    .exec((err, dataPo) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: "Error cargando",
          errors: err
        });
      }

      res.status(200).json({
        ok: true,
        dataPo: dataPo
        //   total: counter
      });
    });
});

module.exports = app;
