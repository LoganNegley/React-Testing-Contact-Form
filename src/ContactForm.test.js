import React from "react";
import { render } from "@testing-library/react";
import 'mutationobserver-shim';
import ContactForm from '../src/components/ContactForm';

test('renders First Name,Last Name, Email and Message inputs', ()=>{

//Arrange
const {getByText} = render(<ContactForm/>);
// Act
getByText(/first name/i);
getByText(/Last Name/i);
getByText(/Email/i);
getByText(/Message/i);
//Assert

})