
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('sensor', (table) => {
            table.increments("sensor_id");
            table.uuid('field_id').references('field_id').inTable('field').notNullable();
            table.jsonb('location').notNullable();
            
        })
    ])
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sensor');
};
