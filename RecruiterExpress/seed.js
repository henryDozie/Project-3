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
    jobId: "20001-AL",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "New York",
    salary: "$1,000,000"
  });
  const job2 = await Jobs.create({
    jobTitle: "Software Engineer",
    jobId: "20001-AM",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "New York",
    salary: "$1,000,000"
  });
  const job3 = await Jobs.create({
    jobTitle: "Software Engineer",
    jobId: "20001-AQ",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "New York",
    salary: "$1,000,000"
  });

  const job4 = await Jobs.create({
    jobTitle: "Architecture",
    jobId: "20001-AT",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "Texas",
    salary: "$2,000,000"
  });

  const job5 = await Jobs.create({
    jobTitle: "DJ",
    jobId: "20001-AW",
    jobDescription: "This is the job description region",
    jobRequirements: "This is a list of Job descriptions",
    location: "LA",
    salary: "$20,000"
  });


  const recruiter1 = await Recruiter.create({
    name: "Casey Harding",
    rating: "Stallion",
    review: "20001-A0",
    jobCount: "12",
    recruiter_image: "http://google.com"
  });

  const recruiter2 = await Recruiter.create({
    name: "Lebron James",
    rating: "King",
    review: "20021-AR",
    jobCount: "120",
    recruiter_image: "http://google.com"
  });

  const recruiter3 = await Recruiter.create({
    name: "Samuel Joseph",
    rating: "King",
    review: "20021-AZ",
    jobCount: "120",
    recruiter_image: "http://google.com"
  });

  const recruiter4 = await Recruiter.create({
    name: "Omnia Oeglad",
    rating: "King",
    review: "20021-AP",
    jobCount: "120",
    recruiter_image: "http://google.com"
  });

  const recruiter5 = await Recruiter.create({
    name: "Henry Dozie",
    rating: "King",
    review: "20021-AV",
    jobCount: "120",
    recruiter_image: "http://google.com"
  });

  await recruiter1.addJobs(job1);
  await recruiter2.addJobs(job2);
  await recruiter3.addJobs(job3);
  await recruiter4.addJobs(job4);
  await recruiter5.addJobs(job5);

  await admin.addJobs([job1, job2, job3, job4, job5])
  await admin.addRecruiter([recruiter1, recruiter2])

  process.exit();
};

seed();
