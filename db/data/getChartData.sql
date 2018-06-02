Select count(com.outcome), CONCAT(u.first_name,' ', u.last_name) as canvasser, u.user_id, com.outcome, e.event_id, e.starttime
from communication com
join users u on u.user_id = com.user_id
join events e on com.event_id = e.event_id
where com.outcome = $2 and com.campaign_id = $1
group by u.user_id, com.outcome, e.event_id