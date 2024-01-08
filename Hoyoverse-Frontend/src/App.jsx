import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <Suspense>
            <Routes>
                <Route element={<MainLayout></MainLayout>}>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                </Route>
                {/* <Route
                    path="/register"
                    element={<SignUpPage></SignUpPage>}
                ></Route>
                <Route
                    path="/login"
                    element={<SignInPage></SignInPage>}
                ></Route> */}
            </Routes>
        </Suspense>
    );
};

export default App;
