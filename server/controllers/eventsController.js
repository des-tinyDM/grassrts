const getEvents = (req, res) => {
  const db = req.app.get("db");
  const { campaign_id, scheduled, completed, user_id } = req.query;

  console.log(req.query);

  //get all events, past and future
  //
  //   //get future events that the vol is scheduled for
  // } else if (scheduled === "true" && completed === "false") {
  //   db.events
  //     .getEventsScheduled([campaign_id, user_id])
  //     .then(futureScheduled => {
  //       console.log(`future scheduled`, futureScheduled);
  //       res.status(200).json(futureScheduled);
  //     })
  //     .catch(err => {
  //       console.log(`future scheduled`, err);
  //       res.status(500).json(err);
  //     });
  //   //get all past events
  // } else if (scheduled === "false" && completed === "true") {
  //   db.events
  //     .getAllFutureEvents(campaign_id)
  //     .then(pastEvents => {
  //       console.log(`all past events`, pastEvents);
  //       res.status(200).json(pastEvents);
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //       console.log(`past events`, err);
  //     });
  // }
  // //get all past events that used was scheduled for
  // else
  //   db.events
  //     .getEventsScheduledCompleted([campaign_id, user_id])
  //     .then(attendedEvents => {
  //       console.log(`past scheduled`, attendedEvents);
  //       res.status(200).json(attendedEvents);
  //     })
  //     .catch(err => {
  //       console.log(`past scheduled`, err);
  //       res.status(200).json(err);
  //     });

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
module.exports = {
  getEvents
};
