| Url                 | Method | Description                 | Request               | Response    | Status Code |
| ------------------- | ------ | --------------------------- | --------------------- | ----------- | ----------- |
| /api/v1/users       | GET    | Get the list of all users   |                       | userList    | 200, 400    |
| /api/v1/users/{id}  | GET    | Get the detail of a user    |                       | user        | 200, 400    |
| /api/v1/users       | POST   | Create a new user           | email, password, name | null        | 200, 400    |
| /api/v1/users/{id}  | PUT    | Update a user               | password, name        | null        | 200, 400    |
| /api/v1/users/{id}  | DELETE | Delete a user               |                       | null        | 200, 400    |
| /api/v1/auth        | POST   | Issue access token          | email, password       | accessToken | 200, 400    |
| /api/v1/boards      | GET    | Get the list of all boards  |                       | postList    | 200, 400    |
| /api/v1/boards/{id} | GET    | Get the detail of the board |                       | post        | 200, 400    |
| /api/v1/boards      | POST   | Create a new board          | title, content        | null        | 200, 400    |
| /api/v1/boards/{id} | PUT    | Update a board              | title, content        | null        | 200, 400    |
| /api/v1/boards/{id} | DELETE | Delete a board              |                       | null        | 200, 400    |
| /comments           | GET    |                             |                       |             |             |
| /comments           | POST   |                             |                       |             |             |
| /comments           | PUT    |                             |                       |             |             |
| /comments           | DELETE |                             |                       |             |             |
