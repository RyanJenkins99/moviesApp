import React from "react";
import TrendingMovies from "../components/trendingMovieslist";
import { MemoryRouter } from "react-router";
import { MoviesProvider } from "../contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: "Trending/Movies",
  component: TrendingMovies,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesProvider initialEntries={["/"]}>{Story()}</MoviesProvider>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => <TrendingMovies/>;
Basic.storyName = "Default";
