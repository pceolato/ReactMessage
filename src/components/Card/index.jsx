import './styles.css'

export function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.email}</small>
            <small>{props.time}</small>
            <p>"{props.message}"</p>
        </div>
    )
}