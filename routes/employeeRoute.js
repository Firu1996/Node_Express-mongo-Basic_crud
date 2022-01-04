const express = require('express');
const router = express.Router();

const { getEmployees,
        deleteEmployee,
        getEmployeesById,
        updateEmployee,
        addEmployee } = require('../Controller/emoployeeController');

router.route('/getemployees').get(getEmployees);
router.route('/addemployee').post(addEmployee);
router.route('/deleteemployee/:id').delete(deleteEmployee);
router.route('/getemployee/:id').get(getEmployeesById);
router.route('/updateemployee/:id').put(updateEmployee);


module.exports = router;