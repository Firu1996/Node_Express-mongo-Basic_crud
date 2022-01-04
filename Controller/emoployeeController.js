const employeeModel = require('../Model/employeeModel');

exports.getEmployees = async (req, res, next) => {
    const employees = await employeeModel.find();

        res.status(200).json({
            success: true,
            count: employees.length,
            employees
        })

}

exports.addEmployee = async (req, res, next) => {
    const { firstName , lastName , birthDate, email, position, salary } = req.body;

    const employee = await employeeModel.create({
        firstName,
        lastName,
        birthDate,
        email,
        position,
        salary
    })
    res.status(201).json({
        success: true,
        employee
    })
}

exports.deleteEmployee = async (req, res, next) => {
    const employee = await employeeModel.findById(req.params.id);
    if(!employee){
        res.status(400).json({
            success: false,
            message: `Emoplyee does not found with id : ${req.params.id}`
        })
    }
    await employee.remove();

    res.status(200).json({
        success: true
    })
}

exports.getEmployeesById = async (req, res, next) => {
    const employee = await employeeModel.findById(req.params.id);

    if(!employee){
        res.status(400).json({
            success: false,
            message: `Emoplyee does not found with id : ${req.params.id}`
        })
    }

    res.status(200).json({
        success: true,
        employee
    })
}

exports.updateEmployee = async (req, res, next) => {
    let employeeId = req.params.id;
    let updateContent = req.body;
    let employee = await employeeModel.findById(employeeId);

    if(!employee){
        res.status(404).json({
            success: false,
            message: `Cannot find employee`
        })
    }

    employee = await employeeModel.findByIdAndUpdate(employeeId, updateContent, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        employee
    })

}