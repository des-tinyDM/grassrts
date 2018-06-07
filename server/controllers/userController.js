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
const addNote = (req, res) => {
  const db = req.app.get("db");
  const { user_id, written_by, event_id, note } = req.body;
  db.user
    .submitNote(user_id, written_by, event_id, note)
    .then(notes => {
      res.status(200).json(notes);
      console.log(notes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getNotes = (req, res) => {
  const db = req.app.get("db");

  db.user
    .getNotes(req.params.user_id)
    .then(notes => {
      res.status(200).json(notes);
      console.log(notes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  submitProfile,
  addNote,
  getNotes
};
