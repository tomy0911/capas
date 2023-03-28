require("dotenv").config({ path: "./config/.env" });

const MongoStore = require("connect-mongo");
const adavancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const options = {
  store: MongoStore.create({
    mongoUrl: process.env.MONGOATLAS,
    mongoOptions: adavancedOptions,
  }),
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
};

module.exports = { options };
