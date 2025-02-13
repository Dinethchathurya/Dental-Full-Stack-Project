# Dental Booking System with Real-Time Availability and Payment Gateway Integration

This is a full-stack dental booking system that allows users to book appointments with doctors, make payments through integrated gateways, and manage real-time availability using WebSockets. The system also includes an admin dashboard for managing doctors and appointments.

## Project Features

- **Frontend:** Built using React.
- **Backend:** Node.js and Express handle server-side logic.
- **Database:** MongoDB for data storage and Mongo Express as a database management UI.
- **Real-Time Functionality:** WebSockets for real-time availability updates of doctors.
- **Payment Integration:** Supports payment gateways for booking payments.
- **Admin Dashboard:** Admin functionalities for managing doctors and viewing appointment bookings.

## DevOps Pipeline

- **Version Control:** Git is used for version control with a structured branching strategy.
- **Containerization:** Docker is used for containerizing the frontend, backend, and database components.
- **Continuous Integration/Continuous Deployment (CI/CD):** GitHub Actions for automated workflows, including:
  - Building and testing frontend and backend components.
  - Publishing Docker images to the GitHub package registry.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongo Express
- **Real-Time Updates:** WebSockets
- **DevOps Tools:**
  - **Version Control:** Git, GitHub
  - **Containerization:** Docker, Docker Compose
  - **CI/CD:** GitHub Actions

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dinethchathurya/Dental-Full-Stack-Project.git
   cd Dental-Full-Stack-Project/app
2. **Build and run the application with Docker Compose:**
  Make sure Docker and Docker Compose are installed on your machine. If not, follow the installation guides on Docker's official website.To build and start all services defined in docker-compose.yml, run the following command:
```bash
docker-compose up --build
```
3.**Access the application:**
Frontend: http://localhost:5173
Backend: http://localhost:9000
Mongo Express: http://localhost:8081


