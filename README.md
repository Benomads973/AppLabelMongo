# AppLabelMongo

## White-Label Application - Docker Compose Setup

This repository provides a configurable white-label solution that allows for deploying personalized versions of a shared application. Each client can instantiate their own version with unique branding, while sharing a common infrastructure.

## Prerequisites

Make sure the following are installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Benomads973/AppLabelMongo.git
cd AppLabelMongo
```

Using SSH

```bash
git clone git@github.com:Benomads973/AppLabelMongo.git
cd AppLabelMongo
```

2. Create an .env file

Create a .env file in the root directory of the project to configure environment variables such as database credentials, ports, etc. Use .env.example as a reference:

```bash
Copy code
cp .env.example .env
```

3. Build and Run the Project

Once you have configured the environment variables, you can start the application using Docker Compose:

```bash
Copy code
docker-compose up --build
```

This command will build the necessary images and start all containers as defined in the docker-compose.yml file.

4. Access the Application

After the services are up and running, you can access the application through your browser.

```bash
Frontend: http://localhost:8887
Backend API: http://localhost:5000
These ports can be configured in your .env file if needed.
```

5. Stopping the Application

To stop and remove the running containers, use the following command:

```bash
Copy code
docker-compose down
```

This will stop all containers and remove networks, but it will keep the built images. If you also want to remove the images and volumes, use:

```bash
Copy code
docker-compose down --rmi all -v
```

## Directory Structure

```bash
docker-compose.yml – Defines the services, networks, and volumes for Docker Compose.
frontend/ – Contains the frontend application (e.g., React, Vue).
backend/ – Contains the backend API (e.g., Node.js, Python, etc.).
database/ – Database configurations (e.g., PostgreSQL, MySQL).
```

## Customization

This project is designed as a white-label solution. To customize the application for specific clients:

Modify the environment variables in .env.
Customize the frontend and backend logic as needed for each client.

## Troubleshooting

```bash
Container fails to start: Check the logs with docker-compose logs for detailed error messages.
Port conflicts: Ensure that the ports defined in .env are available and not used by other applications.
```