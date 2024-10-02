About The Project:
TeleCure is an online medical system designed to facilitate virtual consultations. It enables users to book virtual medical appointments, receive e-prescriptions, and access their medical records and lab reports. The application supports remote healthcare services by connecting Admins, Doctors, Patients, and Pharmacists seamlessly.

This project was developed as a college assignment using React.js for the frontend, Spring Boot for the backend, and MySQL for the database.

Features:
Admin
Registration & Login: Admin can register and securely log into the system.
Manage Doctors: Add, view, and delete Doctor accounts.
Manage Patients: View and delete Patient accounts.
Manage Appointments: View all patient appointments and assign them to appropriate Doctors based on the patient's problem.
Dashboard: Overview of all users (Doctors & Patients) and appointments.

Doctor
Login: Secure login for Doctors.
View Appointments: Access all appointments assigned by the Admin.
Conduct Consultations: Perform virtual consultations with Patients.
Update Appointments: Mark appointments as 'Treatment Done'.
E-Prescriptions: Provide electronic prescriptions to Patients.

Patient
Registration & Login: Patients can register and securely log into the system.
View Doctors: Browse all available Doctors on the Home Page.
Book Appointments: Schedule virtual consultations with selected Doctors.
View Appointments: Access a list of all booked appointments with options to cancel if needed.
Access Medical Records: View medical records and lab reports.

Architecture
The project follows the MVC (Model-View-Controller) architecture, ensuring a clear separation of concerns:

Model: Represents the data structure and business logic handled by Spring Boot.
View: The user interface built with React.js and styled using Tailwind CSS.
Controller: Manages user input and interactions, routing data between the frontend and backend.

#telecure/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── ManageDoctors.jsx
│   │   │   │   ├── ManagePatients.jsx
│   │   │   │   └── ManageAppointments.jsx
│   │   │   ├── Doctor/
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   └── ManageAppointments.jsx
│   │   │   ├── Patient/
│   │   │   │   ├── PatientDashboard.jsx
│   │   │   │   ├── BookAppointment.jsx
│   │   │   │   └── ViewAppointments.jsx
│   │   │   ├── Pharmacist/
│   │   │   │   ├── PharmacistDashboard.jsx
│   │   │   │   └── ManagePrescriptions.jsx
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── ProtectedRoute.jsx
│   │   │   │   └── RoleSwitcher.jsx
│   │   ├── mockData/
│   │   │   ├── mockDoctors.js
│   │   │   ├── mockPatients.js
│   │   │   └── mockAppointments.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/telecure/
│   │   │   │   ├── controllers/
│   │   │   │   ├── models/
│   │   │   │   ├── repositories/
│   │   │   │   ├── services/
│   │   │   │   └── TeleCureApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── ...
│   ├── pom.xml
│   └── README.md
├── .gitignore
└── LICENSE

Admin Dashboard: http://localhost:5173/admin
Doctor Dashboard: http://localhost:5173/doctor
Patient Dashboard: http://localhost:5173/patient


Admin Actions:

Login: Access the Admin Dashboard by logging in as an Admin.
Manage Doctors: Add new Doctors to the system and manage existing ones.
Manage Patients: View and delete Patient accounts.
Assign Appointments: View all patient appointments and assign them to Doctors based on the patient's problem.
Doctor Actions:

Login: Access the Doctor Dashboard by logging in as a Doctor.
View Appointments: Access and manage all appointments assigned by the Admin.
Conduct Consultations: Perform virtual consultations with Patients.
Update Status: Mark appointments as 'Treatment Done'.
Provide E-Prescriptions: Issue electronic prescriptions to Patients.
Patient Actions:

Register & Login: Create a new Patient account and log in.
View Doctors: Browse all available Doctors on the Home Page.
Book Appointments: Schedule virtual consultations with selected Doctors.
Manage Appointments: View all booked appointments with options to cancel.
Access Records: View medical records and lab reports.
