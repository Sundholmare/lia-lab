import { createContext, useContext } from 'react'

// Create Context object.
const PersonContext = createContext()

// Export Provider.
export function PersonProvider(children) {
	const sharedState = {};
	
	return (
    <PersonContext.Provider value={sharedState}>
        {children}
    </PersonContext.Provider>
	)
}

// Export useContext Hook.
export function usePersonContext() {
	return useContext(PersonContext);
}