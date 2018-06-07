UPDATE campaigns SET
    name = $2,
    organization = $3,
    orglogo = $4,
    description = $5,
    type = $6,
    scope = $7,
    vrgoal = $8,
    commitgoal = $9
WHERE campaign_id = $1