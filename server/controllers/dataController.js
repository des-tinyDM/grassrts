const getVolunteers = (req, res) => {
  const db = req.app.get("db");
  const { campaign_id, event_id } = req.query;
  console.log(req.query);

  !event_id || event_id === "undefined"
    ? db.data
        .getAllVols(campaign_id)
        .then(volList => {
          console.log(`get all vols campaign`, volList);
          res.status(200).json(volList);
        })
        .catch(err => {
          console.log(`get all vols, campaign`, err);
          res.status(500).json(err);
        })
    : db.data
        .getVolsEvent(event_id)
        .then(volList => {
          console.log(`get Vols 1 Event`, volList);
          res.status(200).json(volList);
        })
        .catch(err => {
          console.log(`get Vols 1 Event:`, err);
          res.status(500).json(err);
        });
};
const getContacts = (req, res) => {
  const db = req.app.get("db");
  const { campaign_id } = req.params;
  const { event_id } = req.query;

  console.log(`getting contacts...`, req.params);

  db.data
    .getContactData(campaign_id)
    .then(contacts => {
      console.log(`getting Contact Data`, contacts);
      res.status(200).json(contacts);
    })
    .catch(err => {
      console.log(`Getting Contact Data`, err);
      res.status(500).json(err);
    });
  // : db.data
  //     .getEventContacts(event_id)
  //     .then(contacts => {
  //       console.log(`getting event contacts:`, contacts);
  //       res.status(200).json(contacts);
  //     })
  //     .catch(err => {
  //       console.log(`Getting event contacts:`, err);
  //       res.status(500).json(err);
  //     });
};
const getChartData = (req, res) => {
  const db = req.app.get("db");
  const { outcome, campaign_id, event_id, user_id } = req.query;

  console.log(`chartData:`, req.query);

  user_id ? console.log(`user Chart`) : console.log(`bigger Chart`);

  db.data
    .getUserChart(user_id)
    .then(userChart => {
      console.log(`get user chart data`, userChart);
      res.status(200).json(userChart);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const addContact = (req, res) => {
  const db = req.app.get("db");
  const {
    firstName,
    lastName,
    address,
    city,
    stateName,
    zip,
    phone,
    email,
    dateofbirth,
    allowsContact,
    user_id,
    event_id
  } = req.body;
  console.log(req.body);

  db.data
    .addContact([
      firstName,
      lastName,
      address,
      city,
      stateName,
      zip,
      phone,
      email,
      dateofbirth,
      allowsContact,
      user_id,
      event_id
    ])
    .then(contactList => {
      console.log(`updatedContactList:`, contactList);
      res.status(200).json(contactList);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getProfile = (req, res) => {
  const db = req.app.get("db");
  console.log(req.body);
  db.data
    .getVolProfile(req.params.user_id)
    .then(profile => {
      res.status(200).json(profile);
      console.log(`get vol prof:`, profile);
    })
    .catch(err => {
      res.status(200).json(err);
      console.log(err);
    });
};
const getOutcomesVR = (req, res) => {
  const db = req.app.get("db");
  const { campaign_id, user_id } = req.query;
  console.log(req.query);

  db.data
    .getOutcomeVR(campaign_id, user_id)
    .then(vr => {
      console.log(vr);
      res.status(200).json(vr);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
};

const getOutcomesCommit = (req, res) => {
  const db = req.app.get("db");
  const { campaign_id, user_id } = req.query;
  console.log(req.query);

  db.data
    .getOutcomeCommit(campaign_id, user_id)
    .then(commit => {
      console.log(commit);
      res.status(200).json(commit);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
};

module.exports = {
  getVolunteers,
  getContacts,
  getChartData,
  addContact,
  getProfile,
  getOutcomesCommit,
  getOutcomesVR
};
