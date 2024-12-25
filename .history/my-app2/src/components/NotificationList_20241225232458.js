
import React from 'react';
import { Switch } from './Switch';
import { formatDateTime } from './DateUtils';

export function NotificationList({ notifications, onToggle }) {
  return (
    <>
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
        >
          <div className="space-y-2">
            <p className="font-medium">{notification.phoneNumber}</p>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <p className="text-xs text-gray-500">
              Scheduled for: {formatDateTime(notification.scheduledTime)}
            </p>
          </div>
          <Switch
            checked={notification.isActive}
            onCheckedChange={() => onToggle(notification.id)}
          />
        </div>
      ))}
    </div>
    </>
  );
}
