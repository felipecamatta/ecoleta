import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('point_items', table => {
    table
      .unique(['point_id', 'item_id'])
      .primary(['point_id', 'item_id'])

    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points')

    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items')
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('point_items')
}