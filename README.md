# Node_task1
## Introduction 
### API Documentation Link:https://documenter.getpostman.com/view/29008830/2sA3QqgDA3
This API provides endpoints for performing file operations using a Node.js Express application.
### Base URL: https://nodejs-task-1-dpsl.onrender.com

## Endpoints

### Create File

#### https://nodejs-task-1-dpsl.onrender.com/create

 - Description: Creates a new text file with the current timestamp as the filename inside a directory named "Timestamps".
 - URL: /create
 - Method: GET

#### Request

No request parameters required.

#### Response

 - Status Code: 200 OK
 - Response Body: "File Created"

### Read Files

#### https://nodejs-task-1-dpsl.onrender.com/read

 - Description: Reads all files in the "Timestamps" directory and retrieves their content.
 - URL: /read
 - Method: GET

#### Request

 No request parameters required.

#### Response
 
 - Status Code: 200 OK
 - Response Body:[
  {
  "fileName": "example.txt",
  "fileContent": "File content here..."
  },
  {
  "fileName": "another_example.txt",
  "fileContent": "Another file content here..."
  }
  ]












