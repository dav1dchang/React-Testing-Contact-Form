import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm'

test('renders ContactForm without errors', () => {
    render(<ContactForm />)
})

test('User can fill out and submit form', async () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByTestId(/firstname/i)
    const lastNameInput = screen.getByTestId(/lastname/i)
    const emailInput = screen.getByTestId(/email/i)
    const messageInput = screen.getByTestId(/message/i)

    fireEvent.change(firstNameInput, { target:{ value: 'David', name: 'firstName' }})
    fireEvent.change(lastNameInput, { target:{ value: 'Chang', name: 'lastName' }})
    fireEvent.change(emailInput, { target:{ value: 'yo123@gmail.com', name: 'email' }})
    fireEvent.change(messageInput, { target:{ value: 'Waddup Dawg', name: 'message' }})

    const button = screen.getByRole('submit')
    fireEvent.click(button);

    const newFirstNameInput = await screen.findByText(/David/i)
    expect(newFirstNameInput).toBeTruthy()

    const newLastNameInput = await screen.findByText(/Chang/i)
    expect(newLastNameInput).toBeTruthy()

    const newEmailInput = await screen.findByText(/yo123@gmail.com/i)
    expect(newEmailInput).toBeTruthy()

    const newMessageInput = await screen.findByText(/Waddup Dawg/i)
    expect(newMessageInput).toBeTruthy()
})