# FrodoBots React Application

This repository contains the FrodoBots React Application, which consists of three main pages: Dashboard, Maps, and Play.

## Installation

To get started with the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/samuelkavin/frodo-app
   ```

2. Navigate to the project directory:
   ```bash
   cd frodo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the application, run the following command:
```bash
npm start
```

This will launch the application on `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

- `src/` - Contains the source code for the application.
  - `@frodo/` - Reusable React components, hooks and navigations used across different pages.
  - `main/` - Individual pages of the application (`dashboard/`, `maps/`, `play/`).
  - `App.js` - Entry point of the application.

## Dependencies

The application utilizes various libraries and frameworks, some of which include:

- React (18.2.0)
- Material-UI (5.x)
- Mapbox-GL (3.x)
- Redux Toolkit (1.9.7)
- React-Router (6.x)
- Others (refer to `package.json` for a full list)

## Usage

- **Dashboard**: Shows graphs and total numbers of players, bots, and spend.
- **Maps**: Interactive map allowing users to zoom in by selecting radio buttons.
- **Play**: Displays a list of bots with details shown upon clicking.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License

## Acknowledgments

- Mention any contributors, tutorials, or resources used in the project.

---

Make sure to replace `[your-username]`, `[License Name]`, and any placeholders with the appropriate information. Feel free to add more sections or tailor it to suit your project's specific needs!