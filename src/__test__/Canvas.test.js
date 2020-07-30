import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Play from "../components/Play";
import levels from '../levels'

test("renders learn react link", () => {
  const initialState = { counter: 1 }
  const mockStore = configureStore()
  const store = mockStore(initialState)
  const { getByTestId } = render(<Provider store={store}><Play levels={levels} /></Provider>);
  const linkElement = getByTestId(/canvas/i);
  expect(linkElement).toBeInTheDocument();
});