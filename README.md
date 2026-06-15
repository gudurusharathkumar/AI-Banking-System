# AI-Powered Banking Management System

## Project Overview

AI-Powered Banking Management System is a Full Stack Banking Application developed using React, Spring Boot, and MySQL.

The application allows users to:

- Register and Login
- Create Bank Accounts
- Deposit Money
- Withdraw Money
- Transfer Money
- Check Balance
- View Transaction History
- Search Accounts
- Update Account Holder Name
- Delete Accounts
- Get AI-Based Financial Analysis
- Receive Financial Suggestions

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA

### Database
- MySQL

### Tools
- Git
- GitHub
- VS Code
- MySQL Workbench
- Postman

---

## Project Architecture

Frontend (React)

↓

REST API Calls (Axios)

↓

Backend (Spring Boot)

↓

MySQL Database

---

## Features

### User Module
- User Registration
- User Login
- Dynamic Welcome Message

### Banking Module
- Create Account
- Deposit Money
- Withdraw Money
- Transfer Money
- Check Balance
- Account Details
- Search Account
- Update Account Name
- Delete Account

### AI Module
- AI Financial Analysis
- Financial Suggestions

---

## Database Tables

### users

| Column |
|----------|
| id |
| name |
| email |
| password |

### accounts

| Column |
|----------|
| id |
| account_holder_name |
| account_number |
| balance |

---

## How to Run Frontend

```bash
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## How to Run Backend

```bash
mvn spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

---

## API Endpoints

### User APIs

- POST /api/users/register
- POST /api/users/login

### Account APIs

- POST /api/accounts/create
- PUT /api/accounts/deposit
- PUT /api/accounts/withdraw
- PUT /api/accounts/transfer
- GET /api/accounts/balance

---

## GitHub Repository

Repository Link:

https://github.com/gudurusharathkumar/AI-Banking-System

---

## Author

Sharath Kumar Guduru

Full Stack Developer

Java | Spring Boot | React | MySQL
