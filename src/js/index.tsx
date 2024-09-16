import classNames from "classnames";
import Link from "next/link";
import React, { CSSProperties } from "react";

export interface ClickableProps {
    className?: string,
    style?: CSSProperties,
    to?: string,
    onClick?: (e: React.MouseEvent) => void | Promise<void>,
    linkType?: "normal" | "no-next" | "new-tab",
    disabled?: boolean,
    submit?: boolean,
    children: React.ReactNode
}

export function Clickable({
    className,
    style,
    to,
    onClick,
    linkType = "normal",
    disabled = false,
    submit = false,
    children
}: ClickableProps) {
    if (to && !disabled) {
        if (linkType !== "normal") {
            return (
                <a
                    href={to}
                    onClick={onClick}
                    className={className}
                    style={style}
                    {...(linkType === "new-tab" ? {
                        target: "_blank",
                        referrerPolicy: "no-referrer"
                    } : {})}
                >{children}</a>
            )
        }
        else {
            return (
                <Link
                    href={to}
                    onClick={onClick}
                    className={className}
                    style={style}
                >{children}</Link>
            )
        }
    }
    else if (onClick) {
        return (
            <button
                onClick={onClick}
                className={classNames(className, {disabled})}
                style={style}
                type={submit ? "submit" : "button"}
            >{children}</button>
        )
    }
    else {
        return (
            <div
                className={classNames(className, {disabled})}
                style={style}
            >{children}</div>
        )
    }
}