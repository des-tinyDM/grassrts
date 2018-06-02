const submitProfile = (req, res) => {
  const db = req.app.get("db");
  const { user_id } = req.params;
  const {
    firstName,
    lastName,
    profileImg,
    address,
    city,
    stateName,
    zip,
    phone,
    email,
    interests,
    bio
  } = req.body;

  console.log(req.params, req.body);
  console.log(`hit`);

  db.user
    .submitProfile([
      firstName,
      lastName,
      profileImg,
      address,
      city,
      stateName,
      zip,
      phone,
      email,
      interests,
      bio,
      user_id
    ])
    .then(profile => {
      console.log(profile);
      res.status(200).json(profile[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
module.exports = {
  submitProfile
};
