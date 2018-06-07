-- SELECT * FROM users u 
-- WHERE u.user_id IN
--   (
--     SELECT DISTINCT ep.user_id 
--     FROM campaign_members ep
--     WHERE ep.campaign_id = $1
--   );

SELECT * FROM users u
WHERE u.user_id IN
(SELECT cm.user_id
FROM campaign_members cm
WHERE cm.campaign_id = $1
)