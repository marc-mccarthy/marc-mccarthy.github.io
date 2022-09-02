-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "pages" (
    "id" SERIAL PRIMARY KEY,
    "page_name" VARCHAR (50) NOT NULL,
    "address" VARCHAR (50) NOT NULL
);

CREATE TABLE "technologies" (
    "id" SERIAL PRIMARY KEY,
    "tech_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL,
    "logo" VARCHAR (500) NOT NULL
);

CREATE TABLE "services" (
    "id" SERIAL PRIMARY KEY,
    "service_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL,
    "logo" VARCHAR (500) NOT NULL
);

CREATE TABLE "future" (
    "id" SERIAL PRIMARY KEY,
    "future_to_do" VARCHAR (500) NOT NULL
);

CREATE TABLE "interests" (
    "id" SERIAL PRIMARY KEY,
    "interest_name" VARCHAR (50) NOT NULL,
    "icon" VARCHAR (1) NOT NULL
);

CREATE TABLE "videos" (
    "id" SERIAL PRIMARY KEY,
    "video_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "project_name" VARCHAR (50) NOT NULL,
    "image" VARCHAR (500) NOT NULL,
    "description" VARCHAR (500) NOT NULL,
    "host" VARCHAR (500) NOT NULL,
    "github" VARCHAR (500) NOT NULL
);

CREATE TABLE "contact" (
	"id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (50),
    "message" VARCHAR (1000) NOT NULL
);
