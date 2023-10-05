## Authorization via ACL Package

A npm package for users authorization via Access Control List for Node.js projects with the auth-session.

<p>
  <a href="https://www.npmjs.com/package/@ekarpovs/authorization-repo-mongo" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@ekarpovs/authorization-repo-mongo.svg">
  </a>
  <a href="https://github.com/ekarpovs/authorization-repo-mongo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ekarpovs/authorization-repo-mongo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ekarpovs/authorization-repo-mongo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### Installation
```bash
  npm install @ekarpovs/authorization-repo-mongo
```
### Usage
```
import { initAcl, checkPermission } from '@ekarpovs/authorization-repo-mongo'

// Create acl.json file:  
// Look at the acl-example.json

// Add the file into the .gitignore

// Init the ACL
const location = './acl.json'
initAsl(location) 

// Protect a router(s):
router.get('/users', (req, res) => {
  if (!checkPermission(req.user.role, '/users', 'R')) {
    return res.sendStatus(403);
  }
  ...
});
```

