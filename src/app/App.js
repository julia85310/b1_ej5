import UserCard from "./UserCard";
const userDatos =  [
    {
        nombre: "Pepe",
        email: "pepe@gmail.com",
        telefono: 673232323
    },{
        nombre: "Natalia",
        email: "natalia@gmail.com",
        telefono: 673234323
    }
];
export default function App(){
    return <>
        {userDatos.map((userDato) => (
                <UserCard
                    key = {userDato.email}
                    nombre = {userDato.nombre} 
                    email = {userDato.email}
                    telefono = {userDato.telefono}
                >
                </UserCard>
            ))
        }
    </>
}