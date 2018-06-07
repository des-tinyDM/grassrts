const getEvents = (req, res) => {
  const db = req.app.get("db");
  const { campaign_id, scheduled, completed, user_id } = req.query;

  console.log(req.query);

  //get all events, future **DEFAULT on page load**

  if (scheduled === "false" && completed === "false") {
    db.events
      .getAllFutureEvents(campaign_id)
      .then(allEvents => {
        console.log(`all events, future`, allEvents);
        res.status(200).json(allEvents);
      })
      .catch(err => {
        console.log(`all events, future`, err);
        res.status(500).json(err);
      });
  }

  if (scheduled === "false" && completed === "true") {
    db.events
      .getAllPastEvents(campaign_id)
      .then(allPast => {
        console.log(allPast);
        res.status(200).json(allPast);
      })
      .catch(err => {
        console.log(`all events, past`, err);
        res.status(500).json(err);
      });
  }

  if (scheduled === "true" && completed === "false") {
    db.events
      .getEventsScheduled(campaign_id, user_id)
      .then(scheduledFuture => {
        console.log(`scheduled, future`, scheduledFuture);
        res.status(200).json(scheduledFuture);
      })
      .catch(err => {
        console.log(`scheduled, future`, err);
        res.status(500).json(err);
      });
  }
  if (scheduled === "true" && completed === "true") {
    db.events
      .getEventsScheduledCompleted(campaign_id, user_id)
      .then(scheduledCompleted => {
        console.log(`scheduled, completed`, scheduledCompleted);
        res.status(200).json(scheduledCompleted);
      })
      .catch(err => {
        console.log(`scheduled, completed`, err);
        res.status(500).json(err);
      });
  }
  //get all events, past and future
  // db.events
  //   .getAllEvents(campaign_id)
  //   .then(allEvents => {
  //     console.log(`all events, all time`, allEvents);
  //     res.status(200).json(allEvents);
  //   })
  //   .catch(err => {
  //     console.log(`all events, all time`, err);
  //     res.status(500).json(err);
  //   });
};

const getPastEvents = (req, res) => {
  const db = req.app.get("db");
  const { user_id, campaign_id } = req.query;
  db.events
    .getEventsScheduledCompleted(campaign_id, user_id)
    .then(events => {
      res.status(200).json(events);
      console.log(`past user events for prof`, events);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(`past user events for prof`, err);
    });
};

const getFutureEvents = (req, res) => {
  const db = req.app.get("db");
  const { user_id, campaign_id } = req.query;
  db.events
    .getEventsScheduled(campaign_id, user_id)
    .then(events => {
      res.status(200).json(events);
      console.log(`future user events for prof`, events);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(`future user events for prof`, err);
    });
};

module.exports = {
  getPastEvents,
  getEvents,
  getFutureEvents
};
