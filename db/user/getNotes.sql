SELECT notes.user_id, notes.id, notes.note, notes.event_id, e.event_name, e.starttime, notes.written_by, CONCAT(u.first_name,' ',u.last_name) as writtenby_name from campaign_member_notes notes join users u
on notes.written_by = u.user_id
join events e on e.event_id = notes.event_id
 where notes.user_id = $1;
