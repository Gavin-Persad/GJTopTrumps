import { render, screen } from "@testing-library/react";
import Card  from "./Card";
import playerDatabase from "../../../playerDatabase.json";
import { statTitles } from "../playerData";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

test('checks if the h1 element is defined', () => {
render(<Card
    playerData={playerDatabase[0]}
    statTitle1={statTitles.statTitle1}
    statTitle2={statTitles.statTitle2}
    statTitle3={statTitles.statTitle3}
    statTitle4={statTitles.statTitle4}
    statTitle5={statTitles.statTitle5}
    statTitle6={statTitles.statTitle6}
    />);
const h1Element = screen.getByRole('heading', { level: 1 });
expect(h1Element).toBeInTheDocument();
});