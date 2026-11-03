const express = require('express');
const router = express.Router();
const bimbelController = require('../controllers/bimbelController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', bimbelController.getAll);
router.get('/:id', bimbelController.getById);
router.post('/', cekApiKey, bimbelController.create);
router.put('/:id', cekApiKey, bimbelController.update);
router.delete('/:id', cekApiKey, bimbelController.remove);

module.exports = router;