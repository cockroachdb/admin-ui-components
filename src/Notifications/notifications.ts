// This is a placeholder for real implementation (likely in Redux?) of notifications

import { notificationTypes, NotificationProps } from "../Notifications";
import { OwnProps as NotificationMessageProps } from "../NotificationMessage";

export const generateNotificationProps = (
  notifications: Array<NotificationProps>,
): Array<NotificationMessageProps> =>
  notifications.map(n => {
    const notificationType = notificationTypes.find(
      nt => nt.notificationKey === n.type,
    );
    return { ...n, ...notificationType };
  });
