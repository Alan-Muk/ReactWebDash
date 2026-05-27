import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*

This file is the main entry point of the React application.

Main Responsibilities:
- Imports global styles from index.css
- Imports the main App component
- Creates the React root container
- Renders the application into the DOM

Key Functions:
- createRoot() → Initializes the React 18 root API
- StrictMode → Helps detect potential problems
  during development

DOM Mounting:
- The app is mounted to the HTML element
  with the id "root"

Application Flow:
1. Load global CSS styles
2. Import the main App component
3. Create React root
4. Render App component inside StrictMode

========================================
*/
