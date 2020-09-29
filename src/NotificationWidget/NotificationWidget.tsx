import React, { FunctionComponent } from "react";
import classnames from "classnames/bind";

import { Link } from "../index";

import {
  NotificationMessage,
  NotificationMessageProps,
} from "../NotificationMessage";

import styles from "./notificationWidget.module.scss";

// const pick = (obj, keys) => {
//   return keys.reduce((acc, cur) => {
//     acc[cur] = obj[cur];
//     return acc;
//   }, {});
// }

const cx = classnames.bind(styles);

export type NotificationWidgetProps = {
  messages: Array<NotificationMessageProps>;
  unread: number;
  markNotificationRead: (id: number) => void;
  markAllNotificationsRead: () => void;
  NotificationCenterLink: React.FunctionComponent<{ className: string }>;
  debug?: boolean;
};

export const NotificationWidget: FunctionComponent<NotificationWidgetProps> = ({
  messages,
  markAllNotificationsRead,
  markNotificationRead,
  NotificationCenterLink,
  unread,
  debug = false,
}) => (
  <section className={cx("notifications-widget")}>
    <header>
      <strong>Notifications</strong> - <strong>{unread}</strong> unread
    </header>

    <div className={cx("messages")}>
      {messages.map(m => (
        <NotificationMessage
          key={m.notificationId}
          onClick={() => markNotificationRead(m.notificationId)}
          {...m}
        />
      ))}
    </div>
    <footer className={cx("footer", "indent")}>
      <Link className={cx("footer-link")} onClick={markAllNotificationsRead}>
        Mark All as Read
      </Link>
      | <NotificationCenterLink className={cx("footer-link")} />
    </footer>

    {debug && (
      <div
        style={{
          backgroundColor: "#eee",
          border: "1px dotted #222",
          margin: "2rem 0 0 0",
          padding: "0 0 0 1rem",
        }}
      >
        <code>
          <pre>{JSON.stringify(messages, null, 2)}</pre>
        </code>
      </div>
    )}
  </section>
);
