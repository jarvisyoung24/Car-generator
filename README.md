Vehicle Generator
-----------------

The Vehicle Generator is a command-line application designed to create, classify, and interact with various vehicle types. This project enables users to build vehicles, select from existing ones, and perform actions with them. The tool has been updated to include support for cars, trucks, and motorbikes.

Features
---------

Create New Vehicles: Input vehicle details such as weight, model, and type to generate a new vehicle.

Vehicle Classification: Automatically classify the vehicle as a car, truck, or motorbike based on input details.

Use Existing Vehicles: Select and perform actions with previously created vehicles.

Interactive CLI Interface: Utilize an intuitive command-line interface powered by Inquirer.

Input Validation: Ensure user inputs are valid, with error messages for missing or incorrect data.

User Story
-----------

AS a developer

I WANT to update an existing application to include additional vehicle types

SO THAT I am able to comprehend and work with existing code bases.

Acceptance Criteria

Vehicle Creation:

GIVEN a command-line application that accepts user input

WHEN I am prompted to create a new vehicle or select an existing one

THEN I can choose between the two options.

Vehicle Types:

WHEN I am prompted to choose the vehicle type during creation

THEN I can choose between car, truck, and motorbike.

Vehicle Details:

WHEN I am prompted for details about the vehicle

THEN I can enter information such as weight, model, and type.

Vehicle Usage:

WHEN I have created or selected a vehicle

THEN I can perform actions with that vehicle and view the results in the command-line interface.

WHEN I complete an action

THEN I can perform additional actions until I choose to exit.

Prerequisites
-------------

Node.js: Ensure you have Node.js installed on your machine.

Dependencies:
-------------
Install the required dependencies by running:

npm install

Running the Application

Invoke the application using:

npm start

Input Details

Weight: Enter the vehicle's weight in kilograms (positive numbers only).

Model: Provide the vehicle model (non-empty string).

Type: Specify the type of vehicle (e.g., Sedan, SUV, Cruiser, etc.).

Commands Overview

Create New Vehicle: Allows the user to input vehicle details and generate a new vehicle.

Select Existing Vehicle: Enables the user to pick from previously created vehicles.

Perform Actions: Interact with the selected vehicle and view the results of those actions.

Exit: Terminate the application.

Validation and Error Handling

Weight Validation: Weight must be a positive number.

Model Validation: Model must be a non-empty string.

Type Validation: Type must match the expected vehicle categories.

Error Messages: Displayed for invalid inputs, guiding users to correct mistakes.

Walkthrough Video
-----------------

A walkthrough video demonstrating the functionality of the application can be found here. https://youtu.be/QInWOCRUD_Ehttps://youtu.be/QInWOCRUD_E


Deployment Notes
-----------------

This application is a command-line tool and is not deployed to a hosting platform. Please run it locally on your machine.

Technologies Used

TypeScript: Strongly typed programming language for building reliable applications.

Node.js: JavaScript runtime environment.

Inquirer: Library for creating interactive command-line interfaces.





https://youtu.be/QInWOCRUD_E

