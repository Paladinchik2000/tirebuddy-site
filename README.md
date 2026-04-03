# TireBuddy

A customer-facing web platform for a mobile automotive service that brings seasonal tire changes and repairs directly to the client's location. The site streamlines the service delivery process by providing:

Service Discovery: Detailed information on mobile tire swaps, puncture repairs, and seasonal maintenance (snow removal and yard cleanup).

Online Appointment Booking: A simplified interface for customers to select services, claim promotional deals (such as group or senior discounts), and request service at their home or workplace.

Business Transparency: A digital presence that establishes trust through service areas, pricing clarity, and contact management for a family-operated Canadian business.

Business Problem Solved
Traditional tire maintenance requires customers to commute to a shop, wait in lines, or leave their vehicles for extended periods.
This site solves the inconvenience of the "shop visit" model by providing a digital gateway for on-demand, location-flexible automotive care.
It reduces the friction of scheduling seasonal maintenance and optimizes the logistics of a mobile service crew serving the Greater Toronto Area.

## 🛠 Tech Stack

* **Core:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (with PostCSS and Autoprefixer)
* **Routing:** React Router v6
* **SEO & Meta:** React Helmet Async
* **Animations:** AOS (Animate On Scroll)
* **Deployment:** Vercel

## ⚙️ Requirements

To run the project locally on your device, you must have [Node.js](https://nodejs.org/) installed (version 18 LTS or higher is recommended).

## 🚀 Installation and Setup

1. Clone the repository:
    ```bash
    git clone [https://github.com/Paladinchik2000/tirebuddy-site.git](https://github.com/Paladinchik2000/tirebuddy-site.git)

2. Navigate to the project directory:
    Bash
     cd tirebuddy-site  
    
3. Install dependencies:
    Bash
     npm install

4. Start the development server:
    Bash
     npm run dev
     
After running the last command, the application will be available in your browser at http://localhost:5173.

📜 Available Scripts
In the root directory of the project, you can run the following commands:

npm run dev — starts the application in development mode with Hot Module Replacement (HMR) support.

npm run build — builds the optimized application for the production environment into the dist directory.

npm run preview — locally serves the production build to verify its correctness before deployment.

🌍 Deployment
The project is initially configured for automatic deployment on the Vercel platform (settings are defined in the vercel.json file).

When merging or pushing changes to the main branch (main), Vercel automatically initiates the build process using the npm run build command and updates the deployed client application.
