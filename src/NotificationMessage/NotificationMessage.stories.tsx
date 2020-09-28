import React, { FunctionComponent, ReactNode } from "react";

import { generateNotificationProps, testNotifications } from "../Notifications";
import { NotificationMessage } from "./index";

type ReactProps = {
  children: ReactNode;
};

export default {
  title: "Notfication Message",
  component: NotificationMessage,
};

const notificationMessages = generateNotificationProps(testNotifications);

const NotificationsDemo: FunctionComponent<ReactProps> = ({ children }) => (
  <section style={{ padding: "2rem" }}>{children}</section>
);
const NotificationsMessageTypes: FunctionComponent<ReactProps> = ({
  children,
}) => (
  <section style={{ display: "flex", flexWrap: "wrap" }}>{children}</section>
);
const NotificationFrame: FunctionComponent<ReactProps> = ({ children }) => (
  <section
    style={{
      width: "30rem",
      padding: "2rem",
      border: "1px dotted #222",
      margin: "0 2rem 2rem 0",
    }}
  >
    {children}
  </section>
);

export const Demo = () => (
  <NotificationsDemo>
    <h1>Notification Types</h1>
    <NotificationsMessageTypes>
      {notificationMessages.map(n => (
        <section key={n.notificationId}>
          <code>{n.type}</code>
          <NotificationFrame>
            <NotificationMessage {...n} />
          </NotificationFrame>
        </section>
      ))}
    </NotificationsMessageTypes>
  </NotificationsDemo>
);
