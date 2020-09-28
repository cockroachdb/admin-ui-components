import React, { FunctionComponent } from "react";
import classnames from "classnames/bind";

import styles from "./Link.module.scss";

type OwnLinkProps = {
  disabled?: boolean;
};

type NativeSpanProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  keyof OwnLinkProps
>;

export type LinkProps = OwnLinkProps & NativeSpanProps;

const cx = classnames.bind(styles);

export const Link: FunctionComponent<LinkProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  ...rest
}) => {
  const handler = disabled ? () => {} : onClick;
  return (
    <span
      className={cx(
        "link",
        {
          disabled,
        },
        className,
      )}
      onClick={handler}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Link;
