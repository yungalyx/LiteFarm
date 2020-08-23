/* 
 *  Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>   
 *  This file (pesiticideModel.js) is part of LiteFarm.
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

const Model = require('objection').Model;

class Sensor extends Model {
    static get tableName() {
        return 'sensor';
    }
      
    static get idColumn() {
        return 'sensor_id';
    }

    static get jsonSchema() {
        return {
            type: "object",
            required:["sensor_id", "field_id", "location"],
            properties: { 
                sensor_id: { type: 'integer' },
                // given field_id, you can sql-query w/ join  
                field_id: {type: 'string'},
                location: { type: 'array',
                    properties: {
                        lat: { type: 'number' },
                        lng: { type: 'number' },
                    }
                }
            }
        }
    }

    // GENERAL AND SURJECTIVE: a field can have many sensors, but not mandated.
    static get relationMappings(){
        return{
            field: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./fieldModel'),
                join: {
                    from: 'sensor.field_id',
                    to: 'field.farm_id'
                }
            }
        }
    }

    
}

module.exports = Sensor;