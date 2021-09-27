import { createContext, useContext, useState } from 'react'

// Create Context object.
const PersonContext = createContext();

let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    closestManager: '',
    officeLocation: '',
    dateOfBirth: '',
    firstEmploymentDate: '',
    lastEmploymentDate: '',
    reAssign: false
}

// Export Provider.
export function PersonProvider({ children }) {
    // const [person, setPerson] = useState(initialState);

    return (
        <PersonContext.Provider value={initialState}>
            {children}
        </PersonContext.Provider>
    )
}

// Export useContext Hook.
export function usePersonContext() {
    return useContext(PersonContext);
}