var express = require('express');
var router = express.Router();
var db = require('../queries')

/* GET home page. */
router.get('/', db.getContacts);
router.post('/', db.createContact);
router.delete('/:id', db.deleteContact);
router.get('/:id', db.getContact);
router.put('/:id', db.updateContact);

module.exports = router;