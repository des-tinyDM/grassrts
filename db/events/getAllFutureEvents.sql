SELECT * from events WHERE campaign_id = $1 AND starttime > current_date ORDER BY starttime ASC