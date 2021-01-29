import {createContext} from 'react';

const DataContext = createContext();

// const ContextController = ({children}) =>{
    
//     return(
//         <DataContext.Provider value={[userData,setUserData]}>
//             {children}
//         </DataContext.Provider>
//     )

// }

export default DataContext;