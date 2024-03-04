// import { expect, test } from "vitest"
// // import { fetchUsers } from "./Dashboard"
// // test("delete a user", () => {
// //     const users = ["Berit", "Bengan", "Kalle", "Olle"];

// //     const user = users.splice(1, 1);
// //     expect(user).not.toHaveLength(4);
// // })
// // test("Check login i working", async () => {
// //     const Login = await fetchUsers ({username: "Bob", password: "123"})
// //     console.log(Login)

// //     expect(fetchUsers.message).toBe("signed in")
// // })

// import { Start } from "./start"
// import { fireEvent, render, screen } from "@testing-library/react";
// import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// import  { Dashboard } from "./Dashboard"
// import { BrowserRouter as Router } from 'react-router-dom';



// test("Checking if you can search for a specific book", async () => {
//     // const router = createBrowserRouter(
//     //     createRoutesFromElements(
//     //         <Route path="/" element={<Start />}>
//     //             <Route path="/" element={<Dashboard />} />
//     //         </Route>
//     //     )
//     // );
//     const { getByTestId } = render(
//         <Router>
//             <Start />
//             {/* <Dashboard /> */}
//         </Router>
//     //  <RouterProvider router={router} />
    
//     );

//     // const searchInput = screen.getByTestId("searchInput");
//     // fireEvent.change(searchInput, { target: { value: "Eragon"} });

//     // expect(title.innerHTML).toBe("Eragon");

//     // const eragon = await screen.findByTestId("title");
//     // expect (eragon).toBeInTheDocument();
//     const searchInput = screen.getByTestId("search-input");
//     const bookToSearch = "Eragon";
   
//     fireEvent.change(searchInput, { target: {value: bookToSearch} });
//     fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter", charCode: 13});
   
//     // Wait for the list of books to be updated
//     await waitFor(() => screen.getByTestId("book-title"));
   
//     const bookTitle = screen.getByTestId("book-title");
   
//     expect(bookTitle).toHaveTextContent(bookToSearch);
// });
   


// // test("Checking if you can search for a specific book", async () => {
// //     const router = createBrowserRouter(
// //         createRoutesFromElements(
// //             <Route path="/" element={<Start />}>
// //                 <Route path="/" element={<Dashboard />} />
// //             </Route>
// //         )
// //     );
    
// //     const searchInput = await screen.findByTestId("search-input");
// //     const bookToSearch = "Eragon";

// //     fireEvent.change(searchInput, { target: {value: bookToSearch} });
// //     fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter", charCode: 13});

// //     const bookTitle = await screen.findByTestId("book-title")

// //     expect(bookTitle).toHaveTextContent(bookToSearch);

// //     // const searchedBook = await handleSearchBooks("Eragon")
// //     // console.log(searchedBook)

// //     // expect(searchedBook[0].title).toBe("Eragon")
// // })