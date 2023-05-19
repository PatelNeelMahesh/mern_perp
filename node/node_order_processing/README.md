# Express: Pagination Middleware

You have been given the task to write an Express middleware that has to standardize the query, search, and projection parameters for all the endpoints.

The middleware should parse the query parameter from the URL and create an object containing the following properties:

- `page:` The page of the resource to fetch. Defaults to 1. [NUMBER]
- `limit:` The number of items to return in a response. Defaults to 3. [NUMBER]
- `skip:` The actual number of items that have to skip while fetching the data. Its value is ((page - 1) * limit). [NUMBER]
- `searchTerm:` The search term to be used in the data-store query. The term is extracted from the q query parameter. [STRING]
- `search:` A Regex expression that can be evaluated to match the names of the items in the recipes. The search should be global and case insensitive ("gi"). [RegexP]
 

The generated object should then be added to the context property in the Express request object, and the control should be forwarded using the next function.
     
### Routes
- `/recipes?page&limit&q` - The route to fetch all the recipes from the data-store. Optional query parameters `page`, `limit`, and `q` help in controlling the number and position of recipes sent back as a response by the server.   

### Examples
- `/recipes - a GET request to get all recipes`
```json
{
   "page":1,
   "limit":3,
   "skip":0,
   "data":[
      {
         "id":1,
         "name":"Roast"
      },
      {
         "id":2,
         "name":"Asparagus"
      },
      {
         "id":3,
         "name":"Rice"
      }
   ]
}
```

- `/recipes?page=1&limit=2`
```json
{
   "page":1,
   "limit":2,
   "skip":0,
   "data":[
      {
         "id":1,
         "name":"Roast"
      },
      {
         "id":2,
         "name":"Asparagus"
      }
   ]
}
```

- `/recipes?page=2&limit=3`
```json
{
   "page":2,
   "limit":3,
   "skip":3,
   "data":[
      {
         "id":4,
         "name":"Pizza"
      },
      {
         "id":5,
         "name":"Recipe"
      },
      {
         "id":6,
         "name":"Puds"
      }
   ]
}
```

- `/recipes?page=1&limit=3&q=cr`
```json
{
   "page":1,
   "limit":3,
   "skip":0,
   "search":"cr",
   "data":[
      {
         "id":1,
         "name":"Crock"
      },
      {
         "id":5,
         "name":"Cranberry"
      }
   ]
}
```

### Project Specifications

**Read-Only Paths**
- test
- bin

**Commands**
- run: `npm start`
- install: `npm install`
- test: `npm test`
