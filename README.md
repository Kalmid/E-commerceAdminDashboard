# Role-Based eCommerce Admin Dashboard

A secure and scalable eCommerce Admin Panel built with **Node.js**, **Express.js**, **AdminJS**, **Sequelize ORM**, and **PostgreSQL**.
This project includes authentication, role-based access control, live dashboard statistics, and settings management.

---

## Features

### Authentication

* Secure login with email and password
* Password hashing using bcrypt
* JWT token generation for API authentication
* Protected AdminJS access

### Role-Based Access Control

#### Admin Users

* Full access to all resources
* Manage Users, Products, Categories, Orders, OrderItems, Settings
* View dashboard statistics

#### Regular Users

* Can log in to dashboard
* Limited access
* Users and Settings resources hidden

### Dashboard

* Custom AdminJS dashboard
* Live database counts:

  * Total Users
  * Total Products
  * Total Orders

### Settings Management

* Key-value configuration management
* Admin-only access

### Database Models

* User
* Category
* Product
* Order
* OrderItem
* Setting

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Sequelize
* AdminJS
* bcrypt
* JSON Web Token (JWT)

---

## Project Structure

```text
src/
 ├── admin/
 ├── config/
 ├── models/
 ├── pages/
 ├── routes/
 ├── seeders/
 └── app.js
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone <your-github-repo-url>
cd adminjs-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Database

Update `src/config/database.js` with PostgreSQL credentials.

### 4. Create Database

```sql
CREATE DATABASE ecommerce_db;
```

### 5. Run Seeder

Create admin user:

```bash
node src/seeders/createAdmin.js
```

Create regular user:

```bash
node src/seeders/createUser.js
```

### 6. Start Project

```bash
npm run dev
```

---

## Login Credentials

### Admin

* Email: [admin@example.com]
* Password: admin123

### Regular User

* Email: [user@example.com]
* Password: user123

---

## Access URLs

* Admin Dashboard: `http://localhost:3000/admin`
* Login API: `http://localhost:3000/api/login`

---

## API Endpoint

### POST `/api/login`

#### Request Body

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

#### Response

```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}

---

