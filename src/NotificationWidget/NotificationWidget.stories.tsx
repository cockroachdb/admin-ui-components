import React, { FunctionComponent } from "react";

import { Link, LinkProps } from "../index";

import {
  testNotifications,
  generateNotificationProps,
  getUnread,
} from "../Notifications";
import { NotificationWidget } from "./NotificationWidget";

export default {
  title: "Notification Widget",
  component: NotificationWidget,
};

const notificationMessages = generateNotificationProps(testNotifications);

const NotificationCenterLink: FunctionComponent<LinkProps> = props => {
  return (
    <Link onClick={() => console.log("go to notif center")} {...props}>
      Notification Center
    </Link>
  );
};

const NotificationsWidgetContainer: FunctionComponent = ({ children }) => (
  <section style={{ width: "33rem", border: "1px dotted #222" }}>
    {children}
  </section>
);

export const Example = () => (
  <section style={{ padding: "2rem" }}>
    <h1>Notification Widget</h1>
    <NotificationsWidgetContainer>
      <NotificationWidget
        messages={notificationMessages}
        unread={getUnread(notificationMessages)}
        markAllNotificationsRead={() => console.log("mark all as read")}
        markNotificationRead={(id: number) => console.log(`id - ${id}`)}
        NotificationCenterLink={NotificationCenterLink}
      />
    </NotificationsWidgetContainer>
  </section>
);
