import React from 'react';
import TopBar from '../TopBar/TopBar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
    return (
        <div className="app-layout">
            <TopBar />

            {/* Row layout wrapper */}
            <div className="layout-row">
                <Sidebar />

                <main className="content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
