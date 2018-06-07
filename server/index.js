require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const session = require("express-session");
const massive = require("massive");
const passport = require("passport");

// const {
//   submitContact,
//   getCommsData,
//   getAllCampaignContacts,
//   getAllVRCount
// } = require(`${__dirname}/controllers/commsController`);
const {
  getAllCampaigns,
  createCampaign,
  getCampaignsJoined
} = require(`${__dirname}/controllers/campaignController`);

const {
  strategy,
  getUser,
  logout
} = require(`${__dirname}/controllers/authController`);

const {
  getVolunteers,
  getContacts,
  getChartData,
  addContact
} = require(`${__dirname}/controllers/dataController`);

const { submitProfile } = require(`${__dirname}/controllers/userController`);

const { getEvents } = require(`${__dirname}/controllers/eventsController`);

const port = 3001;

const app = express();

app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(`db`, err));

app.use(json());
app.use(cors());

//Use sessions first for passport!
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log(user);
  app
    .get("db")
    .auth.getUserByAuthID(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .auth.addUserByAuthID([
            user.name.givenName,
            user.name.familyName,
            user.picture,
            user.id
          ])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

//AUTH ENDPOINTS
app.get(
  `/auth`,
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3001/auth"
  })
);

//AUTH ENDPOINTS
app.get("/logout", logout);
app.get("/api/me", getUser);
app.get(`/api/campaigns/joined/:user_id`, getCampaignsJoined);
app.get(`/api/campaigns`, getAllCampaigns);
app.get(`/api/events`, getEvents);
app.get(`/api/data/contacts/:campaign_id`, getContacts);
app.get(`/api/data/volunteers`, getVolunteers);
app.get(`/api/chart/data`, getChartData);

app.post(`/api/campaigns/add`, createCampaign);
app.post(`/api/data/contacts/add`, addContact);

app.put(`/api/submitprofile/:user_id`, submitProfile);

app.listen(port, () => {
  console.log(`Comin' at you from ${port}`);
});
