For getting the application started, we need to follow next steps for db installing:

- download and install docker
- docker pull mysql
- docker run -d -p 12345:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=bootdb mysql:latest

- docker exec -it <ID-CONTAINER> mysql -u root -p

- inside mysql console just run:

        CREATE DATABASE finantial_schema;

        USE finantial_schema;
        

        CREATE TABLE IF NOT EXISTS `investments` (
            `id` INTEGER PRIMARY KEY,
            `year` INTEGER,
            `initial_balance` NUMERIC(20,2),
            `contribution` NUMERIC(20,2),
            `investment_return` NUMERIC(20,2),
            `final_balance` NUMERIC (20,2));

Then make sure to have maven and java 11, if not just install them.

After that just run mvn clean install, and run the api by play button or execute:

- mvn spring-boot:run

this should run thru port 8081.

After the springboot API is up, make sure to have node installed, if not get it

Then run:

- npm install