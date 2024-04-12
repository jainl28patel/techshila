# Medicine Inventory Management Web Application

## Setup Instructions

### Backend
* Create a `.env` file as per the `.sample.env` file in the `backend` directory.
* Add `JWT_SECRET` and `MONGO_URI` to the `.env` file.

### Frontend
* Create a `.env` file as per the `.sample.env` file in the `frontend` directory.
* Add `REACT_APP_API_URL` to the `.env` file.


### Running the Application
* Just install docker and run the below command in the root directory of the project.
* Backend will run on port 4000 and frontend will run on port 3000.
```bash
docker-compose up
```

## Overview
This web application facilitates role-based authentication for managing medicine inventory in a company. It caters to three user roles: CEO, Store Manager, and User. The CEO oversees all workers and inventory, Store Managers manage inventory based on orders and order statuses, and Users can share their location for finding the nearest stores, order medicines, and track their order statuses. Additionally, users have access to standard features like a dashboard, order history, and profile management.

## Implemented Features
- **Role-Based Authentication:** Users are authenticated based on their roles (CEO, Store Manager, or User), ensuring appropriate access levels to various features and functionalities.
- **CEO Functionality:** The CEO has access to oversee all workers and inventory. This includes viewing and managing inventory levels, tracking orders, and monitoring overall performance.
- **Store Manager Functionality:** Store Managers manage inventory based on orders and order statuses. They can update inventory levels, process orders, and track order statuses.
- **User Functionality:** Users can share their location to find the nearest stores, order medicines, and track their order statuses. They also have access to a dashboard displaying relevant information, order history, and profile management options.
- **Dashboard:** Provides a centralized view of relevant information such as inventory levels, order statuses, and user activity.
- **Order History:** Users can view their past orders and track their statuses for reference.
- **Profile Management:** Users can manage their profiles, including updating personal information and preferences.

## Future Scopes
- **OCR (Optical Character Recognition):** Integrate OCR technology to allow users to scan and upload prescriptions, facilitating the ordering process.
- **Medicine Scheduling:** Enable users to schedule medication reminders and manage their medication intake through the application.
- **Chatbot Feature:** Implement a chatbot feature to provide users with instant assistance, answer queries, and guide them through the ordering process.
