const express = require('express');
const PORT = process.env.PORT || 3001;
const jobRouter = require('./routes/jobRouter')
const userRouter = require('./routes/userRouter')
const recruiterRouter = require('./routes/recruiterRouter')

const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());

// routes

app.use('/jobs', jobRouter);
app.use('/recruiters', recruiterRouter);
app.use('/auth', userRouter);

// error handler

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`wingRecruiter is transmitting from port: ${PORT}`);
});

