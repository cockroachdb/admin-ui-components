import React, { FunctionComponent, ReactNode } from "react";

import { NotificationProps, generateNotificationProps } from "../Notifications";
import { NotificationMessage } from "./index";

export default {
  title: "Notfication Message",
  component: NotificationMessage,
};

const testNotifications: Array<NotificationProps> = [
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

const notificationMessages = generateNotificationProps(testNotifications);

const NotificationFrame: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => (
  <section style={{ width: "30rem", padding: "2rem" }}>{children}</section>
);

export const Demo = () => (
  <section style={{ padding: "2rem" }}>
    <h1>Notification Types</h1>
    {notificationMessages.map(n => (
      <section key={n.id}>
        <code>{n.type}</code>
        <NotificationFrame>
          <NotificationMessage {...n} />
        </NotificationFrame>
      </section>
    ))}
  </section>
);
