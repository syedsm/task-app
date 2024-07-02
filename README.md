# React To-Do Application

## Project Overview

This project is a simple To-Do application built using ReactJS and Redux for state management. The application allows users to add, view, edit, and delete tasks. The application is styled using Bootstrap for a clean and responsive design.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Task**: Users can input a task and add it to the list.
- **View Tasks**: Display all added tasks in a list format.
- **Edit Task**: Each task can be edited.
- **Delete Task**: Each task can be deleted from the list.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Vite**: For fast and optimized development environment.
- **Bootstrap**: For styling the application.
- **JavaScript (ES6+)**: For application logic.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/syedsm/task-app
    ```

2. **Navigate to the project directory:**

    ```sh
    cd react-todo-app
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

4. **Start the development server:**

    ```sh
    npm run dev
    ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:5173` to see the application in action.

### Adding a Task

1. Enter a task in the input field.
2. Click the "Add Task" button or press Enter.

### Editing a Task

1. Click the "Edit" button next to a task.
2. Modify the task in the input field.
3. Click the "Save" button to update the task.

### Deleting a Task

1. Click the "Delete" button next to a task to remove it from the list.

## Folder Structure

The project's folder structure is organized as follows:


- **components/**: Contains the React components for the application.
- **features/**: Contains Redux slices for state management.
- **store.js**: Configures and exports the Redux store.
- **App.jsx**: The main application component.
- **index.css**: Global CSS styles.
- **main.jsx**: The entry point of the application.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
