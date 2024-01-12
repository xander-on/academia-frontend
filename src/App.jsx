import { BrowserRouter }   from "react-router-dom";
import { AppRouter }       from "./router/AppRouter";
import { GeneralProvider } from "./store/context/";



export const App = () => {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <AppRouter />
            </GeneralProvider>
        </BrowserRouter>
    )
}
