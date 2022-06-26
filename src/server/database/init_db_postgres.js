const { get_db_postgres } = require("./database.js");
const { init_func } = require("./init_db.js");

get_db_postgres().then(async (db) => {
  await init_func(db);
});
