# Customer Success Platform

## Introduction
-This project utilizes the ABP Framework for the backend and Angular for the frontend to provide a user-friendly interface for managing project details. 
-Users/Admin/Project Leaders can securely log in through Auth0 authentication and access their personalized dashboard. 
-Admin users have additional privileges to add, delete, and view project details.StakeHolders can access their project and can see the updates and can give the feedbacks.
-Email Notification System is also availabe if any changes done the stakeholders recieve an email that this changes has been done.
-Everyone can download the information as in a pdf format.

## Technologies Used
-Frontend: Angular
-Backend: ABP.io Framework
-Database: PostgreSQL
-Authentication: Auth0

## Authentication
- Users are authenticated using Auth0.
- Upon accessing the application, users will be directed to the Auth0 login page to securely log in.
- After successful authentication, users will have access to their personalized dashboard.
- Currently I have developed dashboard for admin.

## Admin Privileges
- Admin users have additional privileges:
- Add new project details.
- Delete existing project details.
- View all project details.
- He have all the access he can do changes in project in each table of the project.

## Third-party Integrations
- Auth0: I have used auth0 which provides secure authentication for users.
