import React, { useState } from 'react';
import { Phone, MessageSquare, Clock } from 'lucide-react';

export function NotificationForm({ onSubmit }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(phoneNumber, message, scheduledTime);
    setPhoneNumber('');
    setMessage('');
    setScheduledTime('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4 mt-`00">
      <div className="relative">
        <Phone className="absolute left-3 top-40 h-5 w-5 text-gray-400" />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="pl-10 w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <textarea
          placeholder="Notification Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="pl-10 w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="relative">
        <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="datetime-local"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
          className="pl-10 w-full p-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Schedule Notification
      </button>
    </form>

    
    </>
    
  );
}
