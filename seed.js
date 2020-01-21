const { Jobs } = require("./models");
const { Recruiter } = require("./models");
const { User } = require("./models");

const seed = async () => {
  await Jobs.destroy({ where: {} });
  await Recruiter.destroy({ where: {} });

  const admin = await User.create({
    username: "omnia",
    password_digest: "$2b$11$J/T6HO7/IHF7TXgu4elqfO.YW6PJIOS9lQdmTQ789Sg7GUPkIer.O"
  })

  const job1 = await Jobs.create({
    jobTitle: "Software Engineer",
    jobId: "20001-AA",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "This is the location of the job",
    Salary: "$1,000,000"
  });
  const job2 = await Jobs.create({
    jobTitle: "Software Engineer",
    jobId: "20001-AA",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "This is the location of the job",
    Salary: "$1,000,000"
  });
  const job3 = await Jobs.create({
    jobTitle: "Software Engineer",
    jobId: "20001-AA",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "This is the location of the job",
    Salary: "$1,000,000"
  });


  const recruiter1 = await Recruiter.create({
    name: "Casey Harding",
    rating: "Stallion",
    review: "20001-AA",
    jobCount: "12",
    recruiter_image: "http://google.com"
  });

  const recruiter2 = await Recruiter.create({
    name: "Lebron James",
    rating: "King",
    review: "20021-AA",
    jobCount: "120",
    recruiter_image: "http://google.com"
  });

  await admin.addJobs([job1, job2, job3])
  await admin.addRecruiter([recruiter1, recruiter2])

  process.exit();
};

seed();
