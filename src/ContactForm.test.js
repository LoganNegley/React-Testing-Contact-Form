import React from "react";
import { render } from "@testing-library/react";
import 'mutationobserver-shim';
import ContactForm from '../src/components/ContactForm';

test('renders First Name,Last Name, Email and Message inputs', ()=>{

//Arrange
const {getByText} = render(<ContactForm/>);
// Act
const firstNameInput = getByText(/First name/i);
const lastNameInput = getByText(/Last Name/i);
const emailInput = getByText(/Email/i);
const messageInput = getByText(/Message/i);
//Assert
expect(messageInput).toBeInTheDocument()
});

