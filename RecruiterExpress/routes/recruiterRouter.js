const { Router } = require('express');
const recruiterRouter = Router();
const { Recruiter } = require('../models.js')

recruiterRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const recruiters = await Recruiter.findAll();
      res.json(recruiters);
    } catch (e) {
      next(e)
    }
  })
  .post(async (req, res, next) => {
    try {
      debugger;
      const recruiters = await Recruiter.create(req.body);
      res.json(recruiters);
    } catch (e) {
      next(e)
    }
  })

  recruiterRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const recruiters = await Recruiter.findByPk(req.params.id);
      res.json(recruiters);
    } catch (e) {
      next(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const recruiters = await Recruiter.findByPk(req.params.id);
      await recruiterRouter.update(req.body)
      res.json(recruiters)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const recruiters = await Recruiter.destroy({ where: { id: req.params.id } })
      res.json(recruiters)
    } catch (e) {
      next(e)
    }
  })

module.exports = recruiterRouter;