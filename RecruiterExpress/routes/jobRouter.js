const { Router } = require("express");
const jobRouter = Router();
const { Jobs } = require("../models.js");

jobRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const jobs = await Jobs.findAll();
      res.json(jobs);
    } catch (e) {
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      debugger;
      const jobs = await Jobs.create(req.body);
      res.json(jobs);
    } catch (e) {
      next(e);
    }
  });

jobRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const jobs = await Jobs.findByPk(req.params.id);
      res.json(jobs);
    } catch (e) {
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const job = await Jobs.findByPk(req.params.id);
      await job.update(req.body);
      res.json(job);
    } catch (e) {
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const job = await Jobs.destroy({ where: { id: req.params.id } });
      res.json(job);
    } catch (e) {
      next(e);
    }
  });

jobRouter.route('/job-titles/:jobTitle/:location').get(async (req, res) => {
  const job = await Jobs.findAll({
    where: {
      jobTitle: req.params.jobTitle,
      location: req.params.location
    }
  })
  res.json(job);
  console.log(job);
})

jobRouter.route('/user/:jobId').get(async (req, res) => {
  const job = await Jobs.findAll({
    where: {
      jobId: req.params.jobId
    }
  })
  res.json(job);
})

module.exports = jobRouter;
