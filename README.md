# Fit - Track - App

FitTrack is an app designed to help users track their fitness journeys, activities, and goals. The application supports two types of users: Employees/Admins and Customers, each with specific roles that determine their permissions and access throughout the app. These roles define the user's authority over various CRUD (Create, Read, Update, Delete) operations.

The backend of FitTrack is implemented as a RESTful API using C# and ASP.NET

#### Desktop application credentials for USER(CLIENT):
	Username: client
	Password: client

#### Desktop application credentials for USER(ADMIN/EMPLOYEE):
	Username: admin
	Password: admin

### Database diagram
![Database_diagram](https://github.com/nukicbelma/FitTrackApp/assets/92430755/a7d87774-b300-4128-86e7-b0c48e535ab4)

### Basic core functionalities (with pictures)
 * User can enter (add) a finished fitness activity. Activities can be edited and deleted. Activity details: name, details, start date, activity type, duration time.
 * Activity types are predefined values (from a dropdown list): run, walk, hike, swim etc.)
 * User can filer activites by start date and activity type.
 * User can search activities by name and details.
 * User can set a personal goal. For example, a gaol can be the (setted) sum of all of the activities durring the day, or the total of the activity durations for all of the activities durring the day. Ex. of goal: activity 1 x per day OR 30 mins per day.
 * Basic UI/UX, AJAX techniques, REST API
   
### Repository pattern
The Repository Pattern abstracts the data layer and provides a consistent API for data access. It also centralizes data access in repository and service classes, ensuring that CRUD (Create, Read, Update, Delete) operations are performed in a uniform manner for every entity from the database.
### Code organization
MVC (Model-View-Controller) is a software architectural pattern used for organizing code in web applications. It separates the application into three interconnected components: Model (handles data and business logic), View (renders the user interface), and Controller (processes user input and updates the Model and View). This separation facilitates modular development, easier maintenance, and a clear structure for managing complex applications.
