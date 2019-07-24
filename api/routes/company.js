const router = require('express').Router()
const Units = require('../model/units')


  router.get('/', (req, res, next) => {
      let vari = req.query
      if (vari != null) {
    Units.find(vari).select("-kind -floor -special_monthly_offer -_id -__v").then(response => {
        res.json({response})
    })
    }
    else {
        Units.find().select("-__v").then(response => {
            res.json({response})
        })
    }
  })

  router.get('/:id', (req, res, next) => {
    Units.findById(req.params.id).select("-__v").then(response => {
        res.json({response})
    });
  })

  router.post('/', (req, res, next) => {
    Units.create(req.body).select("-__v").then(response => {
        res.json({response})
    })  
  })

  router.patch('/:id', (req, res, next) => {
    Units.findByIdAndUpdate(req.params.id, req.body).select("-__v").then(response => {
    res.json({response})
   });
  })


  router.delete('/:id', (req, res, next) => {
    Units.findOneAndDelete({_id: req.params.id}).select("-__v").then(response => {
        res.json({response})
    });
  })

  module.exports = router