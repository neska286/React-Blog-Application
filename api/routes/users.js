const { updateUser, deleteUser, getuser } = require('../controller/user.controller');

const router = require('express').Router();

router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.get('/:id',getuser);


module.exports = router