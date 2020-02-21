import React from "react";
import { render } from "@testing-library/react";
import 'mutationobserver-shim';
import ContactForm from '../src/components/ContactForm';

test('renders First Name,Last Name, Email and Message inputs', ()=>{

//Arrange
const {getByLabelText} = render(<ContactForm/>);
// Act
getByLabelText(/first name/i);
getByLabelText(/Last Name/i);
getByLabelText(/Email/i);
getyByLabelText(/Message/i);
//Assert

})