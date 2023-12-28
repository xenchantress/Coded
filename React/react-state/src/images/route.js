const router = createBrowserRouter([
    {
      // it renders this element
      element: <Team />,
  
      // when the URL matches this segment
      path: "teams/:teamId",
  
      // with this data loaded before rendering
      loader: async ({ request, params }) => {
        return fetch(
          `/fake/api/teams/${params.teamId}.json`,
          { signal: request.signal }
        );
      },
  
      // performing this mutation when data is submitted to it
      action: async ({ request }) => {
        return updateFakeTeam(await request.formData());
      },
  
      // and renders this element in case something went wrong
      errorElement: <ErrorBoundary />,
    },
  ]);