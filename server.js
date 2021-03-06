const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");

const PORT = process.env.PORT || 5000;
const app = express();

// Body parser
app.use(express.json());

//Dev Login middleware
if (process.env.NODE_ENV === "develepment") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle unhandle promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Closer server & exit process
  server.close(() => process.exit(1));
});
