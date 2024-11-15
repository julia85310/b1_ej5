export default function UserCard({nombre, email, telefono}){
    return <>
        <h2>{nombre}</h2>
        <p>{email}</p>
        <p>{telefono}</p>
    </>
}