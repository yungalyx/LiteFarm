const baseController = require('../controllers/baseController');
const sensorModel = require('../models/sensorModel');
const { Model } = require('objection');
const Knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const knex = Knex(config);

class sensorController extends baseController {
    

    static addSensor() {
        return async (req, res) => {
            const trx = await transaction.start(Model.knex());
            try {
              const result = await baseController.postWithResponse(sensorModel, req.body, trx);
              await trx.commit();
              res.status(201).send(result);
            } catch (error) {
              //handle more exceptions
              await trx.rollback();
              res.status(400).json({
                error,
              });
            }
        };
    }

    // Sensor isn't linked with a farm_id...so if this doesn't work, try 
    //  const rows = await sensorModel.query().where('farm_id', null).orWhere('farm_id', farm_id);
    static getSensorsForFarm(){
        return async (req, res) => {
            try {
              const farm_id = req.params.farm_id;
              const rows = await baseController.getByForeignKey(sensorModel, 'farm_id', farm_id);
              res.status(200).send(rows);
            }
            catch (error) {
              //handle more exceptions
              res.status(400).json({
                error,
              });
            }
        }
    }

    // O, M, W
    static getSensorsForField(){
        return async (req, res) => {
            try {
              const field_id = req.params.field_id;
              // Field as in query request parameter, and field as in.. like a physical (or virtual?) field
              // anyways, dont get fooled.
              const rows = await baseController.getByFieldId(sensorModel, 'field_id', field_id);
              res.status(200).send(rows);
            }
            catch (error) {
              //handle more exceptions
              res.status(400).json({
                error,
              });
            }
        }
    }

    
    static getSensorByID(){
        return async (req, res) => {
            try {
              const sensor_id = req.params.sensor_id;
              const row = await baseController.getByForeignKey(sensorModel, 'sensor_id', sensor_id);
              // seems like if the response is only one item(or less), we'd wrap it in an array 
              // probably for future parsing 
              if (!row.length) {
                res.sendStatus(404)
              }
              else {
                res.status(200).send(row);
              }
            }
            catch (error) {
              //handle more exceptions
              res.status(400).json({
                error,
              });
            }
        }
    }


    static deleteSensor(){
        return async (req, res) => {
            const trx = await transaction.start(Model.knex());
            try {
              const isDeleted = await baseController.delete(sensorModel, req.params.id, trx);
              await trx.commit();
              if (isDeleted) {
                res.sendStatus(200);
              } else {
                res.sendStatus(404);
              }
            } catch (error) {
              await trx.rollback();
              res.status(400).json({
                error,
              });
            }
        }
    }

    static updateSensor(){
        return async (req, res) => {
            const trx = await transaction.start(Model.knex());
            try {
              const updated = await baseController.put(sensorModel, req.params.id, req.body, trx);
              await trx.commit();
              if (!updated.length) {
                res.sendStatus(404);
              } else {
                res.status(200).send(updated);
              }
      
            } catch (error) {
              await trx.rollback();
              res.status(400).json({
                error,
              });
            }
        }
    }


}

module.exports = sensorController;
