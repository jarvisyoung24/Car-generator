Vehicle Generator
-----------------

Description
------------
The Vehicle Generator is a command-line application designed to create, classify, and interact with various vehicle types. This project allows users to build vehicles, select from existing ones, and perform actions with them. The tool has been updated to include support for cars, trucks, and motorbikes.

Key Features
-------------

Vehicle Creation: Create new vehicles by inputting details such as weight, model, and type.

Vehicle Classification: Automatically classify vehicles as cars, trucks, or motorbikes based on the input details.

Use Existing Vehicles: Select and interact with previously created vehicles.

Interactive CLI Interface: Enjoy an intuitive command-line interface powered by Inquirer.

Input Validation: Ensure user inputs are valid, with error messages for incorrect or missing data.

Technologies Used
------------------

TypeScript: Strongly typed programming language for building reliable applications.

Node.js: JavaScript runtime environment.

Inquirer: Library for creating interactive command-line interfaces.

User Story

As a developer, I want to update an existing application to include additional vehicle types so that I can comprehend and work with existing code bases.

Acceptance Criteria
--------------------


GIVEN a command-line application that accepts user input

WHEN prompted to create a new vehicle or select an existing one

THEN the user can choose between the two options.

Vehicle Types

WHEN prompted to choose the vehicle type during creation

THEN the user can choose between car, truck, and motorbike.

Vehicle Details

WHEN prompted for details about the vehicle

THEN the user can enter information such as weight, model, and type.

Vehicle Usage

WHEN a vehicle is created or selected

THEN the user can perform actions with that vehicle and view results in the command-line interface.

WHEN an action is completed

THEN the user can perform additional actions until choosing to exit.

Installation
--------------
Prerequisites

Node.js: Ensure Node.js is installed on your machine.

npm install

- Start the application:

npm start

Usage

- Launch the Application:

Run npm start to start the command-line interface.

- Input Details:

Enter the vehicle’s weight (positive number), model (non-empty string), and type (e.g., Sedan, SUV, Cruiser).

Commands Overview:

Create New Vehicle: Input vehicle details to generate a new vehicle.

Select Existing Vehicle: Pick from previously created vehicles.

Perform Actions: Interact with the selected vehicle and view the results.

Exit: Terminate the application.

Validation and Error Handling

Weight Validation: Ensure the weight is a positive number.

Model Validation: Ensure the model is a non-empty string.

Type Validation: Ensure the type matches expected vehicle categories.

Error Messages: Provide guidance for correcting invalid inputs.

Walkthrough Video
------------------
A walkthrough video demonstrating the application functionality can be found here:
Vehicle Generator Walkthrough

https://youtu.be/QInWOCRUD_E

