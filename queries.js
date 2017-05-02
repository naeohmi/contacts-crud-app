const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/contacts';
const db = pgp(connectionString);

let createContact = (req, res, next) => {
    req.body.age = parseInt(req.body.age)
    db.none('INSERT INTO contacts(first, last, age, gender)' +
            'VALUES(${first}, ${last}, ${age}, ${gender})',
            req.body)
        .then(res.redirect('/'))
};

let getContacts = (req, res, next) => {
    db.any('select * from contacts')
        .then(function(data) {
            res.render('index', {
                title: "All Contacts",
                data: data
            })
        })
};

let getContact = (req, res, next) => {
    db.any('select * from contacts')
        .then(function(data) {
            res.render('index', {
                title: "All Contacts",
                data: data
            })
        })
};

let deleteContact = (req, res, next) => {
    let contactId = parseInt(req.params.id);
    db.result('DELETE FROM contacts WHERE id = $1', contactId);
};

let updateContact = (req, res, next) => {
    // console.log(req.params.id);
    let firstName = req.body.first;
    db.one('UPDATE contacts set first=$1 WHERE id=$2', [firstName, req.params.id]);

    //when edit button is clicked,
    //need to create an update form that will
    //turn the field into an input field
    //so the user can input data into the field
    //user then will edit the data
    //also need to add a submit button
    //for user to submit edited data
    //when submit button is clicked, use an axios put request to:
    //read/save that data
    //and add that data to the database

};

module.exports = {
    createContact: createContact,
    getContacts: getContacts,
    deleteContact: deleteContact,
    getContact: getContact,
    updateContact: updateContact
};