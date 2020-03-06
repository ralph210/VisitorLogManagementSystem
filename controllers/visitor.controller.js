const Visitor = require('../models/visitor');
const mongoose = require('mongoose');
exports.test = (req, res) => {
    res.send('Working!');
}

exports.visitor_create = (req, res) => {
    let visitor = new Visitor({
        ID : req.body.ID,
        VisitorName : req.body.VisitorName,
        Address : req.body.Address,
        Gender : req.body.Gender,
        Faculty : mongoose.Types.ObjectId(req.body.objectId),
        ContactNumber : req.body.ContactNumber,
        Description : req.body.Description,
        email : req.body.email
    });

    visitor.save(err => {
        if (err) return next(err);
        res.send('Visitor Added Succcessfully')
    })
}

exports.visitor_details = (req, res) => {
    Visitor.findById(req.params.id , (err, visitor) => {
        if (err) return next(err);
        res.send(visitor);
    })
}

exports.visitor_update = (req, res) => {
    visitor.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, visitor) => {
        if (err) return next(err);
        res.send('Visitor updated.');
    })
}

exports.visitor_delete = (req, res) => {
    visitor.findByIdAndRemove(req.params.id, err => {
        if (err) return next(err);
        res.send('Deleted successfully');
    })
}