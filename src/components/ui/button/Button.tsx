import type { ElementType, MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    variant?: string;
    icon?: ElementType;
    text?: string;
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
    type = "button",
    variant,
    icon: Icon,
    text,
    onClick,
}: ButtonProps) {

    return (
        <button
            type={type}
            className={`btn ${variant}`}
            onClick={onClick}
        >
            {Icon && <Icon className="icon" />}
            {text && <span className="btn-text">{text}</span>}
        </button>
    );
}