# GreenFi

## Setup
- Clone the repo
- Install any dependencies with `npm install`
- Run with `npm run start`
- Head to `localhost:3001/` to access the status page
- Head to the ui subfolder `cd ui`
- Run `npm run build` to create a production build for React
- Head to `localhost:3000/ui` to access the React app

## Development process
- If starting a new user story, create a branch off of master for a feature branch to collect tasks into
    - Prefix with `feature/` and keep the name within 3-4 words ideally
    - `git checkout -b feature/my-user-story`
- Branch off the feature branch you just created or are contributing to for your task
    - Prefix the branch with the Jira reference
    - `git checkout -b gf-51/my-new-task`
- Hooks are enforced to run for pre-commits and pre-pushes
    - Pre-commit:
        - Whenever you run `git commit`, automatic checks are called on staged files for consistency tests
        - A linter is run with rules and ignorable directories from `.eslintrc.json` and `.eslintignore` on code to keep a consistent look and feel
        - A linter check is also run on `package.json` to keep the dependencies tidy and in an alphabetical order
        - Any fails here abort the commit
    - Pre-push:
        - Whenever you run `git push`, automatic checks are called on files in the given commit for smoke tests
        - Tests are automatically run before pushing
        - Any fails here abort the push
- Create a pull request and tag any relevant people
- Review the code
    - Is the task's functionality considered complete?
    - Are there sufficient tests written for the task to prove functionality as intended?
    - If it was a fix for a bug, has a test been written to prove the bug has been fixed?
    - Can any code by dried up or moved to a more appropriate place?
        - no business logic should be in the view
        - the model should be unspecific with its functionality
        - dead code should be removed
        - code should be mostly self explanatory, but use comments when necessary
        - etc
- Merge and repeat :rocket:

## .env
The following values should be placed in a `.env` file at the root level of the project.
```
ENVIRONMENT=<production|development>
MONGODB_URL=<only used when ENVIRONMENT=production, otherwise defaults to localhost:27017>
MASTER_ADMIN_PASSWORD=<defaults to "password" in non-production, otherwise required>
S3_ACCESS_KEY_ID=<get from heroku>
S3_BUCKET=<get from heroku>
S3_REGION="<get from heroku>
S3_SECRET_ACCESS_KEY=<get from heroku>
SESSION_SECRET=<get from heroku>
```

Put the following in a `.env` file under `ui/`.
```
SKIP_PREFLIGHT_CHECK=true
```

## Proposed Routes
```
/api/users
/api/users/{userId}
/api/users/{userId}/projects
/api/users/{userId}/projects/{projectId}
/api/users/{userId}/projects/{projectId}/groups
/api/users/{userId}/projects/{projectId}/groups/{groupId}
/api/users/{userId}/projects/{projectId}/groups/{groupId}/field-officers
/api/users/{userId}/projects/{projectId}/groups/{groupId}/field-officers/{fieldOfficerId}

/api/projects/
/api/projects/{projectId}
/api/projects/{projectId}/groups
/api/projects/{projectId}/groups/{groupId}
/api/projects/{projectId}/groups/{groupId}/field-officers
/api/projects/{projectId}/groups/{groupId}/field-officers/{fieldOfficerId}

/api/groups
/api/groups/{groupId}
/api/groups/{groupId}/field-officers
/api/groups/{groupId}/field-officers/{fieldOfficerId}

/api/field-officers
/api/field-officers/{fieldOfficerId}
```
