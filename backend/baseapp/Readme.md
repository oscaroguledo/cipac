### Backend services version 2 for app view

### about view-------------------------------------------------
_Post_ to `about/`

- Request Body

```json
{
  "company_name":"Cipac",
  "history":"history",
  "about":"about"
}
```

- Response 201

```json
{
  "message": "successfully added about page details",
  "response":"serializer.data"
}
```
- Response 304

```json
{
  "message": "failed to add about page details"
}
```


- Response 400

```json
{
  "message": "serializer.errors"
}
```

_Patch_ to `edit_about/`

- Request Body

```json
{
  "company_name":"Cipac",
  "history":"history",
  "about":"about",
  "motto":"motto",
  "slogan":"slogan", 
  "email":"email",
  "phone": "phone",
  "address":"address"
}
```

- Response 201

```json
{
  "message": "successfully updated about page details",
  "response":"serializer.data"
}
```
- Response 304

```json
{
  "message": "failed to update about page details"
}
```


- Response 400

```json
{
  "message": "serializer.errors"
}
```

- Response 404

```json
{
    "error": "This about model does not exist"
}
```