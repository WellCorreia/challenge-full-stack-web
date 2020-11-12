## Project structure

```
api
└───__tests__           # Tests unitary and integration
└───log                 # Files with logs of request
└───src
    │   app.js          # App entry point
    │   server.js       # Run aplication
    │   routes.js       # Express routes
    └───app
      └───controllers   # All that is required for the endpoints
      └───models        # Database models
      └───services      # All the business logic is here
      └───repositories  # Armazing query builders
    └───config          # Environment variables and configuration related stuff
    └───constants       # Are fixed values
    └───database        # For control have of DB version, table creation, and data entry
    └───middlewares     # All that is filter for controll
```