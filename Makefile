run:
	docker run -d -p 3000:3000 --env-file .env --rm --name toxin toxin
build:
	docker build -t toxin .
stop:
	docker stop toxin