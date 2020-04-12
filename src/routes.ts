import { Request, Response } from "express";
import createUser from "./services/CreateUser";


export function helloWorld(request: Request, response: Response){
    const user = createUser({
                    email:'john@doe.com', 
                    password:'12345',
                    techs:[ 'nodejs', 
                            'react', 
                            'react native',
                            {title: 'JS', experience: 100}
                        ]
                });
    return response.json({message: 'hello world'});
};