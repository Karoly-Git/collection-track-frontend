import { useState } from "react";
import "./Settings.scss";

type Theme = "light" | "dark" | "system";
type OrderDirection = "newest" | "oldest";

export default function Settings() {
    const [todayChecked, setTodayChecked] = useState<boolean>(true);
    const [theme, setTheme] = useState<Theme>("system");
    const [notificationTime, setNotificationTime] = useState<number>(1);
    const [defaultOrderBy, setDefaultOrderBy] = useState<string>("time");
    const [orderDirection, setOrderDirection] = useState<OrderDirection>("newest");
    const [keepFilters, setKeepFilters] = useState<boolean>(true);

    return (
        <div className="settings">
            <h1 className="settings__title">Settings</h1>

            <div className="settings__card">

                <div className="settings__item">
                    <label>
                        <input
                            type="checkbox"
                            checked={todayChecked}
                            onChange={(e) => setTodayChecked(e.target.checked)}
                        />
                        Today's collections checked by default
                    </label>
                </div>

                <div className="settings__item">
                    <label>Theme</label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value as Theme)}
                    >
                        <option value="light">Bright</option>
                        <option value="dark">Dark</option>
                        <option value="system">Device default</option>
                    </select>
                </div>

                <div className="settings__item">
                    <label>Notification if lorry wait time exceeds</label>
                    <select
                        value={notificationTime}
                        onChange={(e) => setNotificationTime(Number(e.target.value))}
                    >
                        <option value={1}>1 hour</option>
                        <option value={2}>2 hours</option>
                        <option value={3}>3 hours</option>
                    </select>
                </div>

                <div className="settings__item">
                    <label>Collection table default ordering column</label>
                    <select
                        value={defaultOrderBy}
                        onChange={(e) => setDefaultOrderBy(e.target.value)}
                    >
                        <option value="time">Time</option>
                        <option value="customer">Customer</option>
                        <option value="status">Status</option>
                    </select>
                </div>

                <div className="settings__item">
                    <label>Collection table ordering direction</label>
                    <select
                        value={orderDirection}
                        onChange={(e) =>
                            setOrderDirection(e.target.value as OrderDirection)
                        }
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                    </select>
                </div>

                <div className="settings__item">
                    <label>
                        <input
                            type="checkbox"
                            checked={keepFilters}
                            onChange={(e) => setKeepFilters(e.target.checked)}
                        />
                        Keep filters after browser refresh
                    </label>
                </div>

            </div>
        </div>
    );
}