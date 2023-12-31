import { render} from "@testing-library/react";
import Card from "./Card.js";


// **Smoke Tests**: Does the component render? 
it("renders without crashing", function() {
    render(<Card/>);
  });

// **Snapshot Tests**: Does the component’s rendered HTML render in the way you expect?
// snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });