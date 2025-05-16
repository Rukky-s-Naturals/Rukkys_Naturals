import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Account Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200 dark:bg-gray-800 dark:border-gray-700"
              defaultValue="admin_user"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200 dark:bg-gray-800 dark:border-gray-700"
              defaultValue="admin@example.com"
            />
          </div>
          <div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Save Changes
            </button>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={handleNotificationsChange}
            className="h-5 w-5"
          />
          <label htmlFor="notifications" className="text-gray-700 dark:text-gray-300">
            Enable Notifications
          </label>
        </div>
      </section>

      {/* Preferences Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Theme</label>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200 dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Save Preferences
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
