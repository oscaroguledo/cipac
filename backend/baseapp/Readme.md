### Backend services version 2 for app view

### about view-------------------------------------------------
_Post_ to `post_about`

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

_Patch_ to `edit_about`

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

_Get_ to `about`

- Response 200

```json
{
  "message": "About Page details.", 
  "response": "detail"
}
```
- Response 204

```json
{
  "message": "There is no detail", 
  "response": "detail"
}
```
_Get_ to `contact`

- Response 200

```json
{
  "message": "Contact Page details.", 
  "response": "detail"
}
```
- Response 204

```json
{
  "message": "There is no detail", 
  "response": "detail"
}
```