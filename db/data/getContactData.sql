select ci.first_name, ci.last_name, ci.address, ci.city, ci.state, ci.zip, ci.phone, ci.email, ci.dob, ci.allows_contact, e.type, com.outcome, e.event_name, e.starttime, e.type, u.first_name as canvasser_first, u.last_name as canvasser_last
from contact_info ci 
JOIN communication com ON com.contact_id = ci.contact_id
JOIN users u ON com.user_id = u.user_id
JOIN events e ON e.event_id = com.event_id
WHERE e.campaign_id = $1