/* 
 *  Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>   
 *  This file (fieldAPI.test.js) is part of LiteFarm.
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

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const chai_assert = chai.assert;    // Using Assert style
const chai_expect = chai.expect;    // Using Expect style
const chai_should = chai.should();  // Using Should style
const server = 'http://localhost:5000';
const dummy = require('./dummy');
const { isNull } = require('lodash');

beforeAll(() => {
  // beforeAll is set before each test
  // global.token is set in testEnvironment.js
  token = global.token;
});


// LIST OF TESTS TO DO:
// 1. ADDING A SENSOR (should provoke unauthorized response for workers)
// 2. DELETE A SENSOR ^
// 3. GETTING A SENSOR (returns for farm_id, field_id, and sensor_id)

test('POST a sensor to DB', (done) => {
    let sensor = dummy.mockSensor;
    // not sure if field_id is specified
    if (isNull(field_id)){
        sensor.field_id = 223;
    } else {
        sensor.field_id = field_id;
    }
    // sensor.field_id = field_id || 223; 
    chai.request(server).post('/sensor')
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer '+token)
      .send(sensor)
      .end((err, res) => {
        chai_expect(err).to.be.null;
        chai_expect(res.status).to.equal(201);
        chai.expect(res.body).to.have.property('sensor_id'); 
        sensor_id = res.body.sensor_id; // we used PostWithResponse in controller!
        done();
    });
});




