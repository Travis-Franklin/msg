create TABLE users (
    user_id serial PRIMARY key,
    first_name text,
    last_name text,
    email text,
    user_name text unique NOT NULL
);

