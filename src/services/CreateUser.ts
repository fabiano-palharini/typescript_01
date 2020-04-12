interface TechObject {
    title: string;
    experience: number
}

interface CreateUserData {
    name?:string;  //? = significa que é opcional
    email: string;
    password: string | number;
    //techs: Array<string>;
    //techs: string[];
    techs: Array<string | TechObject>;
}

//export default function createUser(name='', email: string, password: string) { //original
//export default function createUser({name='', email: string, password: string}) { //se quisermos desestruturar, a tipagem nao vai funcionar porque interpreta como se fosse renomear a variavel
export default function createUser({name='', email, password}: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;
}