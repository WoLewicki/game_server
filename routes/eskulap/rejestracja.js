var express = require('express');
var router = express.Router();
var Patients = require('../../models/patients');


router.get('/', function(req, res, next) {
    Patients.find({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.render('rejestracja', { title: 'Rejestracja', patients: result});
            }
        });
    });

router.post('/create_patient', function (req, res, next){
    try {
        Patients(req.body).save((err, data) => {
            if (err) res.send("Podano zły pesel/imię");
            else res.send("Zarejestrowano pacjenta!");
        });
    }
    catch (e) {
        console.log(e);
        res.send("Podano zły pesel/imię");
    }
});

module.exports = router;
