interface RoutesProps {
    children?: React.ReactNode;
    location?: Partial<Location> | string;
  }
  
  <Routes location>
    <Route />
  </Routes>;

  
  <Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>