select count(*), c.event_id, e.event_name, e.starttime, e.type, CONCAT(u.first_name,' ',u.last_name) as name,c.outcome from communication c
join users u on c.user_id = u.user_id
join events e on e.event_id = c.event_id
where u.user_id = $2 and e.campaign_id = $1 and e.starttime < current_date and c.outcome = 'Commit'
group by c.event_id, e.event_name, e.type, e.starttime, name, c.outcome
order by e.starttime asc