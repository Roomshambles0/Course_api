### CourseApp Backend API Documentation

#### Introduction

Welcome to the documentation for the CourseApp backend API. This API is built using Express.js and Prisma and provides endpoints for managing courses, users, comments, and leads.

#### Project Setup

 **Clone the Repository:**
   ```bash
git clone  https://github.com/Roomshambles0/Course_api.git
   ```

**Navigate to the Project Directory:**
   ```bash
cd app 
   ```

### Setup .env file
- create .env file inside app directory
```js

DATABASE_URL=

```

**Install Dependencies:**
   ```bash
   npm install
   ```
### Setup Prisma

Connect your postgresql database 

   ```bash
   npx prisma generate
   npm run prisma
   ```

**Run the Server:**
   ```bash
   npm start
   ```

##### Docker Setup

 **Build and Run the Docker Containers:**

  In the root directory just run following command

   ```bash
   docker-compose up 
   ```

   This will run  Docker image of backend and postgresql . Your server will be running inside a Docker container and can be accessed at 
   `http://localhost:3000` and prisma studio is accessed at `http://localhost:5555`.



#### api guides

- To test this api on postman I have created postman collection it is located in Course_api.postman_collection.json.

1. **Create instructor**
   - Method: POST
   - Endpoint: `/instructer/createteacher`
   - Description: Creates a new instructer.
   - Request Body:
     ```json
     {
    "email":"piyushkulkarni2003@gmail.com",
    "name":"piyush2",
    "password":"222"
     }
     ```
   - Response: Status 200 OK with the instructer object.

2. **Create learner**
   - Method: POST
   - Endpoint: `/learner/createlearner`
   - Description: Creates a new learner.
   - Request Body:
     ```json
     {
        "email":"piyushkulkarni2003@gmail.com",
        "name":"piyush2",
        "password":"222"
     }
     ```
   - Response: Status 200 OK with the created learner object.


3. **Create Course**
   - Method: POST
   - Endpoint: `/instructer/createCourse`
   - Description: Creates a new course.
   - Request Body:
     ```json
    {
        "title":"web dev cohort",
        "teacherId":"cltigqbq2000012wancp78hxp",
        "maxseats": 99,
        "startdate":"2024-03-15T14:30:00.000Z",
        "published":true
    }
     ```
   - Response: Status 200 OK with the created course object.

4. **Update Course**
   - Method: PUT
   - Endpoint: `/instructer/updatecourse`
   - Description: Updates details of an existing course.
   - Request Body:
     ```json
    {
        "id":"clth70s3n00017wjdz8o1qdsz",
        "title":"web developement cohort",
        "teacherId":"clth5jvrs0000eo4lcpa9otbj",
        "maxseats":56,
        "startdate":"2024-03-15T14:30:00.000Z"
    }
     ```
   - Response: Status 200 OK with the updated course object.

5. **Course Registration**
   - Method: POST
   - Endpoint: `/learner/registerLead`
   - Description: Registers a user for a course.
   - Request Body:
     ```json
    {
        "email":"piyushkulkarni2002@gmail.com",
        "name":"piyush",
        "title":"web dev cohort",
        "courseId": "cltigv4py000312wa1q6ktca0",
        "userId": "clth56wk70000ccn014za74pe",
        "phoneno": "12346",
        "LinkedIn": "https://www.linkedin.com/in/johndoe/"
    }
     ```
   - Response: Status 200 OK with the registered user object.

6. **Lead Update**
   - Method: PATCH
   - Endpoint: `/instructer/updatelead`
   - Description: Updates the status of a lead.
   - Request Body:
     ```json
     {
        "id":"4461b040-acdc-4364-9bca-f95638d2e262",
       "status": "Accepted"
     }
     ```
   - Response: Status 200 OK with the updated lead object.

7. **Lead Search**
   - Method: GET
   - Endpoint: `/instructer/lead`
   - Description: Searches for leads by name or email.
   -- Request Body:
     ```json
    {
        "email":"piyushkulkarni2002@gmail.com"
    }
     ```
   - Response: Status 200 OK with an array of matching lead objects.

8. **Add Comment**
   - Method: POST
   - Endpoint: `/instructer/comment`
   - Description: Adds a comment to a lead.
   - Request Body:
     ```json
    {
        "id":"4461b040-acdc-4364-9bca-f95638d2e262",
        "comment":"another comment for lead"
    }
     ```
   - Response: Status 200 OK with the lead added comment object.


#### Conclusion

You've successfully set up and documented the CourseApp backend API. 