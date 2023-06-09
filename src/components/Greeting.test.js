import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Greeting />", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if button was not clicked", () => {
    render(<Greeting />);


    const outputElement =screen.getByText("good to see you", {exact: false,
    });

    expect(outputElement).toBeInTheDocument();

  });


  test('render "Changed!" if button is clicked', () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed", {exact: false});
    expect(outputElement).toBeInTheDocument();

  });

  test('does not render good to see you if button is clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText('good to see you', {exact: false});
    expect(outputElement).toBeNull();

  });





});
