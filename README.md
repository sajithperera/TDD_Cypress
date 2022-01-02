## React

```sh
$ cd client
$ npm install
$ npm start
```

## Backend
We will mock our apis to reflect data in UI

### GET todo list api
http://localhost:3001/todo

```
{
  "data": {
    "todos": [
      {
        "complete": false,
        "created_date": "Mon, 28 Jan 2019 15:32:28 GMT",
        "id": 1,
        "name": "go for a walk"
      },
      {
        "complete": false,
        "created_date": "Mon, 28 Jan 2019 15:32:28 GMT",
        "id": 2,
        "name": "go for a short run"
      },
      {
        "complete": true,
        "created_date": "Mon, 28 Jan 2019 15:32:28 GMT",
        "id": 3,
        "name": "clean the stereo"
      }
    ]
  },
  "status": "success"
}
```

### POST todo
http://localhost:3001/todo

request body:
```
{
  "name": "make coffee"
}
```
