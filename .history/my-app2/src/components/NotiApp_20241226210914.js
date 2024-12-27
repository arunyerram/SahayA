import React, { useState } from 'react';
import { NotificationForm } from './NotificationForm';
import { NotificationList } from './NotificationList';
import { Bell } from 'lucide-react';
import Nav from './Nav';


const Notiapp = () => {
  const [notifications, setNotifications] = useState([]);

  const handleSubmit = (phoneNumber, message, scheduledTime) => {
    const newNotification = {
      id: Date.now().toString(),
      phoneNumber,
      message,
      scheduledTime,
      isActive: true,
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleToggle = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isActive: !notification.isActive }
          : notification
      )
    );
  };

  return (
    <>
      <Nav />
      {/* Adjusted the margin-top to `mt-16` to ensure the content is placed below the navbar */}
      <div className="max-h-screen bg-gray-50 mt-00">
        <div className="max-w-2xl mx-auto p-6">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Bell className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Notification Scheduler</h1>
            <p className="text-gray-600 mt-2">Schedule notifications with ease</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">New Notification</h2>
            <NotificationForm onSubmit={handleSubmit} />
          </div>

          {notifications.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Scheduled Notifications</h2>
              <NotificationList
                notifications={notifications}
                onToggle={handleToggle}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notiapp;
