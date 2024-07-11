

export type TUser = {
    id:string ,
    password:string ,
    needsPasswordChange:boolean,
    role:"student" | "admin" | "faculty" ,
    status:"in-progess" | "blocked" ,
    isDeleted:boolean 
}


export type TNewUser = {
    role:string ,
    password:string ,
    id:string
}