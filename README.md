# [Getting Started]


The process to get the application running is typically:
#### Git Clone
* Clone the feature/phase_1 branch

  `git clone https://github.com/evoluteio/evo-ui.git -b feature/phase_1`

#### Install Node Modules
* run `npm install` in the following directories:

  evo-ui[feature/phase_1] latest/dataHandling/package.json
  
  evo-ui[feature/phase_1] latest/evoluteData/package.json
  
  evo-ui[feature/phase_1] latest/frontend/package.json
  
  evo-ui[feature/phase_1] latest/package.json

#### Setup MongoDB 
* Import relevant MongoDB data 

  System (Aggregation) - current_container_stats and container_stats collections

  Applications and Services - app_infos and service_infos collections, e.g.:

  `$ mongorestore --db evolute --collection service_infos mongobackups3-service_infos/evolute/service_infos.bson`
  
  Source: http://bit.ly/EvoUIExampleData


#### Start Backend
* Start backend

  evo-ui[feature/phase_1] latest/evoluteData $ node evoluteData.js

#### Start Frontend
* Start frontend

  evo-ui[feature/phase_1] latest/frontend $ npm run dev

#### Access Frontend
 * Access UI via http://localhost:8080
