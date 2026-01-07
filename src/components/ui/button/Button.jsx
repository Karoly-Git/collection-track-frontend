import "./Button.css";

export default function Button({
    icon: Icon,
    type,
    text,
    className,
    onClick }) {
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}>
            {Icon && <Icon className="icon" />} {text}
        </button>
    );
}
