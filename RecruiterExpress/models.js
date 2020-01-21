// inside models.js
const { Sequelize } = require("sequelize");
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      underscored: true
    }
  })
} else {

  // Create a variable that is a connection to the database.
  sequelize = new Sequelize({
    database: "wingRecruiter_db",
    dialect: "postgres",
    define: {
      underscored: true
    }
  });
}

class Jobs extends Sequelize.Model {}

Jobs.init(
  {
    jobTitle: Sequelize.STRING,
    jobId: Sequelize.STRING,
    jobDescription: Sequelize.TEXT,
    jobRequirements: Sequelize.TEXT,
    location: Sequelize.TEXT,
    salary: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "jobs"
  }
);

class Recruiter extends Sequelize.Model {}

Recruiter.init(
  {
    name: Sequelize.STRING,
    rating: Sequelize.STRING,
    reviews: Sequelize.STRING,
    jobCount: Sequelize.TEXT,
    recruiter_Image: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "recruiter"
  }
);

class User extends Sequelize.Model {}

User.init(
  {
    username: Sequelize.STRING,
    password_digest: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "user"
  }
);

User.hasMany(Jobs, { onDelete: "cascade" });
Recruiter.hasMany(Jobs, { onDelete: "cascade" });
Jobs.belongsTo(Recruiter);
Jobs.belongsTo(User);

module.exports = {
  Jobs,
  User,
  Recruiter,
  sequelize
};