function Input({label, ...rest}) {
    return (
        <div className="input-wrapper">
            {label && <>
                <label htmlFor={rest.id}>
                    {label}
                </label>
                <br/>
            </>}
            <input {...rest} className={`input`} />
        </div>
    );
}

export default Input;