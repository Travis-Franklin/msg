create TABLE users (
    user_id serial PRIMARY key,
    first_name text,
    last_name text,
    email text,
    user_name text unique NOT NULL
);

create TABLE msgs (
    msg_id serial PRIMARY key
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
);
