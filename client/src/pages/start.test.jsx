import { expect, it } from "vitest"
import App from "../App";
import { fireEvent, render, screen } from '@testing-library/react'
// import { expect, test } from "vitest"

it('button clicked', () => {
    render(<App/>)
    
   
    const button = screen.getByTestId('login')
    // const button = screen.getByRole('button')
    // const button = screen.getByText('Sign out')

    fireEvent.click(button)

    expect(screen.getByTestId('login-form')).toBeDefined()

    // fireEvent.click(button)

    // expect(screen.queryByText('My logout')).toBeNull()
})

const res = await axios.post("http://localhost:3005/auth/register", {
              username,
              password,
            });