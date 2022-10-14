function Button({onClick, type, children}) {
    return (
        <div className="button-wrapper">
            <button onClick={onClick} className={`button button-${type}`}>{children}</button>
        </div>
    );
}

export default Button;