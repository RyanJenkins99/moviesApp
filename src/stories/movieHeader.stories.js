import React from "react";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { MoviesProvider } from "@storybook/addon-actions";

export default {
  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesProvider>{Story()}</MoviesProvider>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;

Basic.storyName = "Default";
