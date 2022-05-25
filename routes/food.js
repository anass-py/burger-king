const express = require('express');
const router = express.Router();

// import functions from controllers
const {
    addMenue,
    getAllMenue,
    getMenue,
    updateMenue,
    deleteMenue
} = require('../controllers/food')


router.route('/').post(addMenue).get(getAllMenue)
router.route('/:id').get(getMenue).patch(updateMenue).delete(deleteMenue)


module.exports = router