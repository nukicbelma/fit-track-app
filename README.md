# FitTrack App

FitTrack is an app designed to help users track their fitness journeys, activities, and goals. The application supports two types of users: Employees/Admins and Customers, each with specific roles that determine their permissions and access throughout the app. These roles define the user's authority over various CRUD (Create, Read, Update, Delete) operations.

The backend of FitTrack is implemented as a RESTful API using C# and ASP.NET.

### Desktop Application Credentials
**User (Client):**
- **Username:** client
- **Password:** client

**User (Admin/Employee):**
- **Username:** admin
- **Password:** admin

### Database Diagram
![Database_diagram](https://github.com/nukicbelma/FitTrackApp/assets/92430755/879527f4-c338-4916-b5d8-d06fa840ff21)

### Basic Core Functionalities (with Pictures)

####  Entering a Fitness Activity
Users can add, edit, and delete fitness activities. Activity details include name, description, start date, activity type, and duration time.

**Example 1: Listed Activities (Table)**
![5_activityTablePage](https://github.com/nukicbelma/FitTrackApp/assets/92430755/7f815c60-197f-4d0a-be02-a18ffcb1cc15)

**Example 2: Add Activity**
![13_activityTablePage_addActivity](https://github.com/nukicbelma/FitTrackApp/assets/92430755/abbcc9d4-00cd-4de0-8dea-389f3f9e102f)

**Example 3: Edit Activity**
![12_activtiyTablePage_editActivity](https://github.com/nukicbelma/FitTrackApp/assets/92430755/7a5c3f0a-8890-4c52-9f43-7e9943faf05a)

####  Predefined Activity Types
Activity types are predefined values (from a dropdown list): run, walk, hike, swim, etc.

**Example 4: Predefined Activity Types from Dropdown List (Displayed in Add/Edit Activity)**
![14_activityTablePage_predefinedActivityTypes](https://github.com/nukicbelma/FitTrackApp/assets/92430755/8ba73689-b06d-4e0e-a0b7-a18414f4e562)

####  Filtering Activities
Users can filter activities by start date and activity type.

**Example 5: Filtering by Date and Activity Type**
![8_activityTablePage_activityTypeFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/41c20808-9cd0-4e91-9cc4-33c2ae00ea66)

![9_activityTablePage_dateFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/4480ace4-7d7b-4718-8031-f86160c95980)

####  Searching Activities
Users can search activities by name and description.

**Example 6: Filtering (Search Bar) by Name and Description**
![6_activityTablePage_nameFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/40b0b8cf-789c-4ec2-ab9a-1f2f826b1d3d)

![7_activityTablePage_descriptionFilter](https://github.com/nukicbelma/FitTrackApp/assets/92430755/eaeb27f8-524c-465e-a43c-2192172636e7)

#### Setting Personal Goals
Users can set personal goals, such as the sum of all activities during the day or the total duration of activities during the day. Example goals: activity 1x per day or 30 mins per day.

**Example 7, 8, 9: Goal Setting (View/table/list, edit, add, delete(same as prev.)) **

![15_goalTablePage](https://github.com/nukicbelma/FitTrackApp/assets/92430755/6299852c-1bf6-485a-a460-6f6a690f5d36)

![17_goalTablePage_addgoal](https://github.com/nukicbelma/FitTrackApp/assets/92430755/00e9a3ca-cc07-4130-b403-3eae374bb538)

![16_goalTablePage_editgoal](https://github.com/nukicbelma/FitTrackApp/assets/92430755/4d0f1571-0972-48fa-b1ea-28f58c34c856)


### Basic UI/UX, AJAX Techniques, REST API

### Repository Pattern
The Repository Pattern abstracts the data layer and provides a consistent API for data access. It centralizes data access in repository and service classes, ensuring that CRUD operations are performed uniformly for every entity in the database.

### Code Organization
MVC (Model-View-Controller) is a software architectural pattern used for organizing code in web applications. It separates the application into three interconnected components: Model (handles data and business logic), View (renders the user interface), and Controller (processes user input and updates the Model and View). This separation facilitates modular development, easier maintenance, and a clear structure for managing complex applications.
