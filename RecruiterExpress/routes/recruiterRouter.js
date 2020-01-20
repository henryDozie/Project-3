const { Router } = require("express");
const recruiterRouter = Router();
const { Recruiter } = require("../models.js");

// recruiterRouter.get("/", async (req, res) => {
//   try {
//     const recruiters = await Recruiter.findAll();
//     res.json(recruiters);
//   } catch (e) {
//     next(e);
//   }
// });

// //show
// recruiterRouter.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const recruiters = await Recruiter.findByPk(id);
//     res.json({ recruiters });
//   } catch (e) {
//     next(e);
//   }
// });

// recruiterRouter.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const recruiters = await Recruiter.create(data);
//     res.json({ recruiters });
//   } catch (e) {
//     next(e);
//   }
// });

// //update
// recruiterRouter.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;
//   try {
//     const recruiters = await Recruiter.findByPk(id);
//     await recruiters.update(data);
//     res.json({ recruiters });
//   } catch (e) {
//     next(e);
//   }
// });

// //delete
// recruiterRouter.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const recruiters = await Recruiter.findByPk(id);
//     await speaker.destroy();
//     res.json({ recruiters });
//   } catch (e) {
//     next(e);
//   }
// });

// module.exports = recruiterRouter;

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
