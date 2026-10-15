# PawCare – Animal Adoption Management System (Frontend UI)

A modern, visually engaging **Animal Shelter Administration & Adoption Management Dashboard** built as a college minor project demonstration.

Designed with a **Forest Green** and **Soft Cream** theme, rounded cards, subtle shadows, Material-UI components, and interactive Recharts data visualization.

---

## 🌟 Technology Stack

- **React.js 19** with **Vite**
- **Material UI (MUI)** (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)
- **React Router DOM** for client-side routing and navigation
- **Recharts** for adoption trends and species breakdown charts
- **JavaScript (ES Modules) & JSX**
- **Vanilla CSS** with Google Font (`Plus Jakarta Sans`)

> **Note**: This is a pure frontend UI design and routing project. It does not use any backend, database, localStorage/sessionStorage, or search/filtering APIs. All content utilizes realistic static sample data.

---

## 📂 Project Structure

```text
PawCare/
├── index.html                  # HTML entry point with Plus Jakarta Sans & branding
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
└── src/
    ├── components/             # Reusable UI components
    │   ├── Sidebar.jsx         # Persistent/responsive drawer with route highlighting
    │   ├── Navbar.jsx          # Top bar with notifications & admin profile menu
    │   ├── DashboardCard.jsx   # Statistic metric card component
    │   ├── AnimalCard.jsx      # Animal showcase card with badges & actions
    │   ├── StatusChip.jsx      # Distinct status pills (Available, Pending, etc.)
    │   └── PageHeader.jsx      # Standardized header with titles & actions
    ├── layouts/
    │   └── AdminLayout.jsx     # Shared layout combining Sidebar, Navbar, and outlet
    ├── pages/
    │   ├── Login.jsx           # /login - Split-screen shelter staff login
    │   ├── Dashboard.jsx       # /dashboard - Stats, Recharts trends & recent animals
    │   ├── Animals.jsx         # /animals - Animals catalog with card grid
    │   ├── AddAnimal.jsx       # /animals/add - Registration form with image preview
    │   ├── AnimalDetails.jsx   # /animals/:id - Comprehensive pet profile & care
    │   ├── EditAnimal.jsx      # /animals/edit/:id - Edit form with sample values
    │   ├── Adopters.jsx        # /adopters - Adopter profiles & verification table
    │   ├── AdoptionRequests.jsx# /adoption-requests - 4 summary cards & requests table
    │   ├── MedicalRecords.jsx  # /medical-records - Clinical exam & vaccination table
    │   └── NotFound.jsx        # * - Friendly 404 paw trail error page
    ├── data/
    │   └── mockData.js         # Realistic static sample records & chart data
    ├── theme/
    │   └── theme.js            # MUI custom theme with Forest Green palette
    ├── App.jsx                 # Route definitions & ThemeProvider
    ├── main.jsx                # Application mounting
    └── index.css               # Global typography, resets & scrollbars
```

---

## 🎨 Design Theme & Colors

- **Primary Colors**:
  - Forest Green: `#1B4332`
  - Pine Green: `#2D6A4F`
  - Leaf Accent: `#40916C`
- **Background**:
  - Soft Warm Cream: `#F8F6F1`
  - Card White: `#FFFFFF`
- **Status Accents**:
  - Available / Approved / Healthy: Soft Green (`#E8F5E9` / `#1B5E20`)
  - Pending / Review: Warm Amber (`#FFF8E1` / `#B78103`)
  - Adopted / Placed: Soft Blue (`#E0F2FE` / `#0369A1`)
  - Under Treatment / Alert: Rose Coral (`#FFF1F2` / `#BE123C`)
- **Typography**: Google Font **Plus Jakarta Sans** (weights 400, 500, 600, 700, 800)

---

## 🚀 Navigation & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/login` | **Login** | Shelter staff sign-in with demo credentials (`admin@pawcare.org` / `password123`) |
| `/dashboard` | **Dashboard** | Overview metrics, Recharts charts, recent arrivals, recent adoption requests |
| `/animals` | **Animals** | 8 pet cards (Dogs, Cats, Rabbit) with status chips and navigation actions |
| `/animals/add` | **Add Animal** | Intake form with animal type, health, vaccination, and live photo preview |
| `/animals/:id` | **Animal Details** | In-depth pet specs, microchip ID, personality tags, and diet notes |
| `/animals/edit/:id`| **Edit Animal** | Edit interface matching Add Animal design with prefilled values |
| `/adopters` | **Adopters** | Roster of community adopters with contact info, home checks, and verification |
| `/adoption-requests`| **Adoption Requests** | Status cards (Pending, Approved, Rejected, Completed) and applications table |
| `/medical-records` | **Medical Records** | Clinical exams, vaccinations, attending veterinarians, and next checkup dates |
| `*` | **404 Not Found** | Friendly error page with a direct "Return to Dashboard" action |

---

## 🛠️ How to Run the Project Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine.

### 2. Install Dependencies
Open a terminal in the project directory and install the packages:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the displayed local URL (typically `http://localhost:5173` or `http://localhost:5174`).

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
You can preview the build with:
```bash
npm run preview
```

---

## 📋 Evaluation Checklist

- [x] React.js with Vite
- [x] Material UI (MUI) components & icons
- [x] React Router DOM routing (no page reload)
- [x] Shared `AdminLayout` with responsive `Sidebar` & `Navbar`
- [x] Active sidebar item highlighting
- [x] Recharts adoption analytics and species distribution chart
- [x] Dynamic routes (`/animals/:id`, `/animals/edit/:id`) ordered properly to avoid conflict with `/animals/add`
- [x] Clean forest green & cream aesthetic with rounded cards and subtle shadows
- [x] Realistic sample data for animals, requests, adopters, and medical records
- [x] Pure frontend UI without backend or database dependencies
