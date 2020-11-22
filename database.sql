CREATE TABLE todolist (
    "id" serial PRIMARY KEY,
    "username" varchar(12) NOT NULL,
    "todo" varchar(128),
    "complete" boolean
);

SELECT * FROM todolist ORDER BY id;


INSERT INTO "todolist"("id", "username", "todo", "complete") VALUES(0, 'default', 'finish this code', 'false');
INSERT INTO "todolist"("id", "username", "todo", "complete") VALUES(1, 'default', 'clean the dishes', 'true');
INSERT INTO "todolist"("id", "username", "todo", "complete") VALUES(2, 'default', 'vaccum the house', 'false');