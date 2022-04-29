import './styles.css'

export function Card(props) {
    return (
        <>
        <div className="card">
            <div>
            <strong>{props.name}</strong>
            <small>{props.email}</small>
            </div>

        </div>

         <p>{props.message}</p>
         </>
    )
}