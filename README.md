Improved project structure layout

src/
  app/
    AppShell.tsx
    routes.tsx

  components/
    layout/
      Sidebar.tsx
      Header.tsx
      PageSection.tsx
    ui/
      CardShell.tsx
      MetricCard.tsx
      StatusBadge.tsx
      EmptyState.tsx

  features/
    overview/
      components/
      data/
      types.ts
    flights/
      components/
      data/
      types.ts
    analytics/
      components/
      data/
      types.ts
    map/
      components/
      data/
      types.ts

  hooks/
    useDashboardFilters.ts

  lib/
    format.ts
    constants.ts

  styles/
    globals.css

  types/
    shared.ts

  main.tsx