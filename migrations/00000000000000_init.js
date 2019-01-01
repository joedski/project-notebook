
exports.up = async function (knex, Promise) {
  await knex.schema.createTable('entity', table => {
    table.increments('id')
    .comment('Entity Id')
  })

  await knex.schema.createTable('page', table => {
    table.integer('id').unsigned().notNullable()
    .comment('Page Id (Entity Id)')
    table.foreign('id').references('id').inTable('entity')
    .onDelete('cascade')

    table.text('content')
    .comment('Page Content, Serialized; may not be text search friendly')

    table.text('summary')
    .comment('Short summary of the contents of this page, conclusions, experiment results, etc')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    .comment('When this Page was created')
  })
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('page')
  await knex.schema.dropTable('entity')
};
