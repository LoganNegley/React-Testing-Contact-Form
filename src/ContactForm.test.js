import React from "react";
import { render } from "@testing-library/react";
import 'mutationobserver-shim';
import ContactForm from '../src/components/ContactForm';

test('renders First Name,Last Name, Email and Message inputs', ()=>{

//Arrange
const {getByTestId} = render(<ContactForm/>);
// Act
const firstNameInput = getByTestId(/Firstname/i)
const lastNameInput = getByTestId(/LastName/i);
const emailInput = getByTestId(/Email/i);
const messageInput = getByTestId(/Message/i);
//Assert
expect(firstNameInput).toBeInTheDocument()
expect(firstNameInput).toBeTruthy()
expect(lastNameInput).toBeInTheDocument()
expect(lastNameInput).toBeTruthy()
expect(emailInput).toBeInTheDocument()
expect(emailInput).toBeTruthy()
expect(messageInput).toBeInTheDocument()
expect(messageInput).toBeTruthy()

});



test('placeholder for email', ()=>{
    // Arrange
    const {getByPlaceholderText} = render(<ContactForm/>);
    // Act
    const emailPlaceholder = getByPlaceholderText(/ bluebill1049@hotmail.com/i)
    // Assert
    expect(emailPlaceholder).toMatch('bluebill1049@hotmail.com');
})
