# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. M:N mapping between Facility and Agant
  * Story
    * Design the schema that can be possible to map the M:N relationship between Facilities adn Agents. This is the historical schama to describe the agent's shifts based on the facilities.
    * Schema: 
    ```typescript
    FacilityAgantShift {
      id 
      agant {
        id
        name 
        num_users
        ... // metadata
        created_at
        updated_at
      }
      facility {
        id
        name 
        ... // metadata
        created_at
        updated_at
      }
      shift
      created_at
      updated_at
    }
    ```
    * Advanced: Schema should include the `agant_id`, `facility_id` to represent the above schema and required the `created_at` as mandatory field.
  * Story point: 2
  * Story type: database design
  
2. Get Available Agants by Failicities `getShiftByFacility`
  * Story
    * Fetch the data from `facility_agant` by facilities.
    * Data should grouped by facility_id/shift/created_at in range of the quarter with `created_at` field
  * Story Point: 5
  * Story type: backend

3. Generate Report
  * Story
    Formatting the PDF with data layer of the generation logic
  * Story point: 3
  * Story type: backend
