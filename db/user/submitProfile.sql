UPDATE users 
SET 
first_name = $1, 
last_name = $2, 
profile_img = $3,
address = $4, 
city = $5, 
state = $6, 
zip =$7, 
email =$8, 
phone = $9,
interests = $10,
bio = $11 

WHERE user_id = $12

RETURNING *;