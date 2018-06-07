with add_contact as (
insert into contact_info (first_name, last_name, address, city, state, zip, phone, email, dob, allows_contact) values ($5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning contact_id)
insert into communication (event_id, user_id, outcome, type, contact_id) values ($1, $2, $3, $4,
(select contact_id from add_contact)
);