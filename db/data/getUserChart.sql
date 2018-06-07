Select count(com.outcome), CONCAT(u.first_name,' ', u.last_name) as canvasser, u.user_id, com.outcome, e.event_id, e.event_name, e.starttime
from communication com
join users u on u.user_id = com.user_id
join events e on com.event_id = e.event_id
where u.user_id = $1 and endtime < current_date
group by u.user_id, com.outcome, e.event_id, e.event_name
