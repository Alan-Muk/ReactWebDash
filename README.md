
  Airport Dashboard


---
 Features

- **Overview Stats**
  - Total airports tracked
  - Number of countries covered
  - Top country by airport count
  - Average airports per country

- **Airport Table**
  - Searchable by city, country, name, or code
  - Responsive, scrollable table with operational status
  - Empty state handling for no results

- **Analytics**
  - Interactive bar chart of airports by country
  - Highlights top countries and counts
  - Responsive and dashboard-styled cards

- **Map View**
  - Global airport distribution visualized on a Leaflet map
  - Interactive markers with popups showing airport details
  - Summarized KPI metrics alongside map

- **Responsive & Modern UI**
  - Tailwind CSS for a clean, dark dashboard theme
  - Reusable UI components (`StatCard`, `SectionCard`, etc.)
  - Sidebar navigation for scalable dashboard structure

---

## 🛠 Tech Stack

- **React 18** with **Vite**  
- **TypeScript** for type safety  
- **Tailwind CSS** for styling  
- **Recharts** for analytics charts  
- **React Leaflet** for maps  
- **JSON data** as source (`airports.json`)  

---

 Project Structure

```txt
src/
  components/
    layout/
      Sidebar.tsx
      DashboardHeader.tsx
      SectionCard.tsx
    ui/
      StatCard.tsx
  Components/
    StatsCards.tsx
    AirportTable.tsx
    Charts.tsx
    MapView.tsx
  Data/
    airports.json
  App.tsx
  main.tsx
  index.css
