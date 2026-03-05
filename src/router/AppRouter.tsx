import AppLayout from "@/components/layout/AppLayout/AppLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Login from "@/pages/Login/Login";
import Reports from "@/pages/Reports/Reports";
import Settings from "@/pages/Settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}
