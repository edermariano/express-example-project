module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_PORT,
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true
  }
};
