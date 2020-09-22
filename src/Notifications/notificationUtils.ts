import { NotificationProps } from ".";

export const testNotifications: Array<NotificationProps> = [
  {
    id: 1,
    type: "backup-blocked",
    timestamp: "30 JUL 2020 13:22",
    read: true,
  },
  {
    id: 2,
    type: "command-commit",
    timestamp: "30 JUL 2020 13:25",
    read: false,
  },
  {
    id: 3,
    type: "expired",
    timestamp: "30 JUL 2020 13:30",
    read: false,
  },
  {
    id: 4,
    type: "full-table",
    timestamp: "30 JUL 2020 13:35",
    read: true,
  },
  {
    id: 5,
    type: "expired",
    timestamp: "30 JUL 2020 14:35",
    read: true,
  },
  {
    id: 6,
    type: "network-partition",
    timestamp: "12 AUG 2020 10:00",
    read: false,
  },
];

export const getUnread = (notifs: Array<NotificationProps>) =>
  notifs.reduce((acc, notif) => (notif.read ? acc : (acc += 1)), 0);
