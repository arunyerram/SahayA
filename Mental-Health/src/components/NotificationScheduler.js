import React, { useState } from 'react';
import { Bell, Phone, MessageSquare, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationScheduler = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phoneNumber.value;
    const message = e.target.message.value;
    const scheduledTime = e.target.scheduledTime.value;

    const newNotification = {
      id: Date.now().toString(),
      phoneNumber,
      message,
      scheduledTime,
      isActive: true,
    };
    setNotifications([...notifications, newNotification]);
    e.target.reset();
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
    <div className="max-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <Bell className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold">Notification Scheduler</h1>
          <p className="text-gray-600">Schedule notifications with ease</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" className="pl-10 w-full p-2 border rounded-md" required />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea name="message" placeholder="Notification Message" className="pl-10 w-full p-2 border rounded-md" required />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input type="datetime-local" name="scheduledTime" className="pl-10 w-full p-2 border rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Schedule Notification
          </button>
        </form>

        {notifications.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Scheduled Notifications</h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
                  <div>
                    <p className="font-medium">{notification.phoneNumber}</p>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-500">Scheduled for: {new Date(notification.scheduledTime).toLocaleString()}</p>
                  </div>
                  <button onClick={() => handleToggle(notification.id)} className={`py-1 px-3 rounded-md ${notification.isActive ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {notification.isActive ? 'Active' : 'Inactive'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => navigate(-1)} // Navigate to the previous route
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FF5733",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back
      </button>
        </div>
    </>
  );
};

export default NotificationScheduler;
