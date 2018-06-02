const getAllCampaigns = (req, res, next) => {
  const db = req.app.get("db");

  db.campaign
    .getAllCampaigns()
    .then(list => {
      console.log(`getAllCampaigns`, list);
      res.status(200).send(list);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

const createCampaign = (req, res) => {
  const db = req.app.get("db");
  const {
    name,
    organization,
    orglogo,
    type,
    scope,
    description,
    user_id
  } = req.body;

  db.campaign
    .createCampaign([
      name,
      organization,
      orglogo,
      type,
      scope,
      description,
      user_id
    ])
    .then(response => {
      db.campaign
        .setCampaignAdmin([response[0].campaign_id, user_id])
        .then(response => {
          console.log(response);
          res.status(200).json(response);
        });
    })
    .catch(err => {
      res.status(500).json(err), console.log(`createCampaign`, err);
    });
};

const getCampaignsJoined = (req, res) => {
  const db = req.app.get("db");
  const { user_id } = req.params;

  db.campaign
    .getCampaignsJoined(user_id)
    .then(joined => {
      console.log(joined);
      res.status(200).json(joined);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  getAllCampaigns,
  createCampaign,
  getCampaignsJoined
};
