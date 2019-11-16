require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  storage: './__tests__/test.database.sqlite',
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true
  }
};
