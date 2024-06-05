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
 * User can enter (add) a fitness activity. Activities can be edited and deleted. Activity details: name, description, start date, activity type, duration time.
 example: 2.) Listed activities (table)
![5_activityTablePage](https://github.com/nukicbelma/FitTrackApp/assets/92430755/7f815c60-197f-4d0a-be02-a18ffcb1cc15)
example: 3.) Add activity
![13_activityTablePage_addActivity](https://github.com/nukicbelma/FitTrackApp/assets/92430755/abbcc9d4-00cd-4de0-8dea-389f3f9e102f)
example: 4.) Edit activity
![12_activtiyTablePage_editActivity](https://github.com/nukicbelma/FitTrackApp/assets/92430755/7a5c3f0a-8890-4c52-9f43-7e9943faf05a)

 * Activity types are predefined values (from a dropdown list): run, walk, hike, swim etc.)
example:
example:  5.) Predefined activity types from drop down list. Same are displayed in add/edit activity
![14_activityTablePage_predefinedActivityTypes](https://github.com/nukicbelma/FitTrackApp/assets/92430755/8ba73689-b06d-4e0e-a0b7-a18414f4e562)

 * User can filer activites by start date and activity type.
example: 6.) Filtering by date and activity type
![8_activityTablePage_activityTypeFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/41c20808-9cd0-4e91-9cc4-33c2ae00ea66)

![9_activityTablePage_dateFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/4480ace4-7d7b-4718-8031-f86160c95980)

 * User can search activities by name and description.
 example: 7.) Filtering (search bar) by name and description
![6_activityTablePage_nameFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/40b0b8cf-789c-4ec2-ab9a-1f2f826b1d3d)
![7_activityTablePage_descriptionFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/eaeb27f8-524c-465e-a43c-2192172636e7)

 * User can set a personal goal. For example, a gaol can be the (setted) sum of all of the activities durring the day, or the total of the activity durations for all of the activities durring the day. Ex. of goal: activity 1 x per day OR 30 mins per day.

example 8.) 
 * Basic UI/UX, AJAX techniques, REST API
   
### Repository pattern
The Repository Pattern abstracts the data layer and provides a consistent API for data access. It also centralizes data access in repository and service classes, ensuring that CRUD (Create, Read, Update, Delete) operations are performed in a uniform manner for every entity from the database.
### Code organization
MVC (Model-View-Controller) is a software architectural pattern used for organizing code in web applications. It separates the application into three interconnected components: Model (handles data and business logic), View (renders the user interface), and Controller (processes user input and updates the Model and View). This separation facilitates modular development, easier maintenance, and a clear structure for managing complex applications.
