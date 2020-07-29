create TABLE users (
    user_id serial PRIMARY key,
    first_name text,
    last_name text,
    email text,
    user_name text unique NOT NULL
);

create TABLE msgs (
    msg_id serial PRIMARY key,
    msg_txt text
);

-- the reply table needs to link back to the original msg id
-- and then it needs to time-stamp the reply so that when it is pulled
-- later, it can be sort ordered

create TABLE replies (
    msg_id msgs(msg_id),
    reply_id serial PRIMARY key,
    reply_text text,
    reply_timestamp TIMESTAMP
);

create TABLE linking (
    msg_id serial PRIMARY key,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
);




-- Next we will need a table that will contain the msg 
-- content which will
--have to have a msg_id and the content, 
-- but also be able to house the responses
--do we need another linking table?