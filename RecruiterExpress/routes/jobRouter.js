const { Router } = require("express");
const jobRouter = Router();
const { Jobs, Recruiter } = require("../models.js");


jobRouter.get("/:recruiterId", async (req, res) => {
  try {
    const recruiterId = req.params.recruiterId;
    console.log(recruiterId);

    const jobs = await Jobs.findAll({
      where: { recruiterId }
    });
    res.json({ jobs });
  } catch (e) {
    // console.error(error.message);
    res.json({ error: e.message });
  }
});

//show--> this will be http://localhost:3000/speaker/:recruiterId/quotes/:id
jobRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Jobs.findByPk(id);
    res.json({ job });
  } catch (e) {
    // console.error(error.message);
    res.json({ error: e.message });
  }
});

// #######################################
//THIS IS THE NEW JOB ROUTER POST 
// #######################################

jobRouter.post("/:id", async (req, res) => {
  try {
    const recruiter = req.params.id;
    const jobs = await Jobs.create({
      ...req.body,
      userId: recruiter
    })
    res.json({ jobs });
  } catch (e) {
    res.json({ error: e.message });
  }
});

//update
// jobRouter.put("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = req.body;
//     const job = await Jobs.findByPk(id);
//     await quote.update(data);
//     res.json({ job });
//   } catch (e) {
//     res.json({ error: e.message });
//   }
// });

//delete
jobRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Jobs.findByPk(id);
    await job.destroy();
    res.json('Deleted')
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = jobRouter;

jobRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const jobs = await Jobs.findAll();
      res.json(jobs);
    } catch (e) {
      next(e);
    }
  });
  // .post(async (req, res, next) => {
  //   try {
  //     debugger;
  //     // const job = req.body.job;
  //     const rec = req.body.recruiter;
  //     console.log(rec);
  //     const jobs = await Jobs.create({
  //       ...req.body.job,
  //       userId: rec.recruiter,
  //       recruiterId: rec.recruiter
  //     });
  //     res.json(jobs);
  //   } catch (e) {
  //     next(e);
  //   }
  // });

// jobRouter
//   .route("/:id")
//   .get(async (req, res, next) => {
//     try {
//       const jobs = await Jobs.findByPk(req.params.id);
//       res.json(jobs);
//     } catch (e) {
//       next(e);
//     }
//   })
//   .put(async (req, res, next) => {
//     try {
//       const job = await Jobs.findByPk(req.params.id);
//       await job.update(req.body);
//       res.json(job);
//     } catch (e) {
//       next(e);
//     }
//   })
//   .delete(async (req, res, next) => {
//     try {
//       const job = await Jobs.destroy({ where: { id: req.params.id } });
//       res.json(job);
//     } catch (e) {
//       next(e);
//     }
//   });

// module.exports = jobRouter;
