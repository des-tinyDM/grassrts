select * from event_participants ep
join events e on e.event_id = ep.event_id
where user_id = $2
and e.campaign_id = $1
and endtime < current_date 