export function Button({ name, text, dis }) {  
    return (
        <button className={name} disabled={dis}>{text} </button>
    )
}