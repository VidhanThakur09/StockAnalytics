// /// <reference types="vitest/globals" />
// import { render, screen } from "@testing-library/react";
// import Hero from "../src/landing_page/home/Hero";
// import { expect, test, describe } from 'vitest'
// import '@testing-library/jest-dom/vitest'

// // Use jsdom for this test file
// // @vitest-environment jsdom

// describe("Hero Component", () => {
//     test("render hero image", () => {
//         render(<Hero />);
//         const heroImage = screen.getByAltText("Hero");
//         expect(heroImage).toBeInTheDocument();
//         expect(heroImage).toHaveAttribute("src", "images/homeHero.png");
//     });
// });


//  CURRENTLY NOT WORKING DUE TO VITE TESTING LIBRARY ISSUES