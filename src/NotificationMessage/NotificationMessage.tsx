import React, { FunctionComponent, HTMLAttributes } from "react";
import classnames from "classnames/bind";
import { Badge, BadgeIntent, FuzzyTime } from "@cockroachlabs/ui-components";

import { NotificationType, NotificationSeverity } from "../Notifications";

import styles from "./notificationMessage.module.scss";

export type OwnProps = {
  description: string;
  notificationId: number;
  read: boolean;
  severity: NotificationSeverity;
  timestamp: string;
  title: string;
  type: NotificationType;
};

export type NotificationMessageProps = OwnProps & HTMLAttributes<HTMLElement>;

const cx = classnames.bind(styles);

const truncate = (string: string, length: number): string => {
  if (string.length <= length) return string;

  return `${string.slice(0, length)}…`;
};

const severityIntent = (s: NotificationSeverity): BadgeIntent => {
  const intentMap = {
    low: "neutral",
    info: "neutral",
    moderate: "info",
    critical: "info",
  };
  return intentMap[s] as BadgeIntent;
};

export const NotificationMessage: FunctionComponent<NotificationMessageProps> = ({
  className,
  description,
  read,
  severity,
  timestamp,
  title,
}) => {
  const time = new Date(timestamp);
  return (
    <section
      className={cx("notification-message", { unread: !read }, className)}
    >
      <header className={cx("title")}>{title}</header>
      <Badge className={cx("severity")} intent={severityIntent(severity)}>
        {severity}
      </Badge>
      {description && (
        <div className={cx("description")}>{truncate(description, 120)}</div>
      )}
      <div className={cx("timestamp")}>
        <FuzzyTime timestamp={time} />
      </div>
    </section>
  );
};

export default NotificationMessage;
