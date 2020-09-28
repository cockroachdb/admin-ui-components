export type NotificationType =
  | "backup-blocked"
  | "command-commit"
  | "expired"
  | "full-table"
  | "network-partition";
export type NotificationSeverity = "low" | "info" | "moderate" | "critical";
export type NotificationTypeProp = {
  notificationKey: string;
  title: string;
  description: string;
  severity: NotificationSeverity;
};
export type NotificationProps = {
  notificationId: number;
  read: boolean;
  timestamp: string;
  type: NotificationType;
};

export const notificationTypes: Array<NotificationTypeProp> = [
  {
    notificationKey: "backup-blocked",
    title: "Backup blocked on long-running Transaction",
    description:
      "There is a long running transaction that has prevented a backup on a table for more than 1 hour.",
    severity: "low",
  },
  {
    notificationKey: "command-commit",
    title: "Command Commit Latency",
    description:
      "Command Commit Latency is > 100ms on at least one node in this cluster. This can result in poor query performance.",
    severity: "low",
  },
  {
    notificationKey: "expired",
    title: "Expired License Key",
    description:
      "Your enterprise license key has expired. Enterprise features are disabled until a new license key is set.",
    severity: "moderate",
  },
  {
    notificationKey: "full-table",
    title: "Full Table Scan",
    description:
      "There are queries resulting in full table scans in this cluster. Full table scans may result in poor query performance.",
    severity: "low",
  },
  {
    notificationKey: "network-partition",
    title: "Network Partition",
    description: "There may be a network partition in this cluster.",
    severity: "critical",
  },
];

export default notificationTypes;
