/* 
 *  Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>   
 *  This file (userRoute.js) is part of LiteFarm.
 *  
 *  LiteFarm is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *  
 *  LiteFarm is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details, see <https://www.gnu.org/licenses/>.
 */

const Sensor = require('../models/sensorModel');
const sensorController = require('../controllers/sensorController');
const express = require('express');
const router = express.Router();

const authFarmId = require('../middleware/acl/authFarmId');
const checkOwnership = require('../middleware/acl/checkOwnership');
const checkScope = require('../middleware/acl/checkScope');

// 1. CREATE (W,M)
router.post('/', checkScope(['add:sensors']), sensorController.addSensor())

// 2. READ () // only one get request needed right?
//   a. READ FARM // given FARM 
router.get('/farm/:farm_id', check(['get:sensors']), sensorController.getSensorsForFarm())

//   b. READ FIELD // given field ID
router.get('/farm/:farm_id', checkScope(['get:sensors']), sensorController.getSensorsForField())
//   c. READ SPECIFIC // given sensor ID
router.get('/farm/:farm_id', checkScope(['get:sensors']), sensorController.getSensorByID())
// 3. UPDATE
// router.put('/user/:user_id', checkScope(['edit:sensors']), sensorController.updateSensor()));
router.put('/:id', checkScope(['edit:sensors'], sensorController.updateSensor()));

// 4. DELETE 
router.delete('/:id', checkScope(['delete:sensors'], sensorController.deleteSensor()));


module.exports = router;
