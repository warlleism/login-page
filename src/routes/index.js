import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("../login/index"));
const Next = React.lazy(() => import('../next/index'));

export default function Rotas() {
    return (
        <Router>

            <Routes>

                <Route path="/"
                    exact
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Login />
                        </React.Suspense>
                    } />

                <Route
                    path="/next"
                    element={
                        <React.Suspense fallback='Carregando...' >
                            <Next />
                        </React.Suspense>
                    }
                />

            </Routes>

        </Router >
    )
}