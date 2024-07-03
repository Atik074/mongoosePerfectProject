
export type Guardian = {
    fatherName:string ,
    fatherOccupation:string ,
    fatherContactNumber:string,
    motherName:string ,

}

export type UserName ={
    firstName:string;
    middleName:string;
    lastName:string
} 

export type Student = {
    id:string ,
    name:UserName,
    gender:'male' | 'female',
    dateOfBirth:string ,
    bloodGroup?: 'A+'| 'A-'|'B+'|'B-'|'AB+'|'AB-'|'O+'|'O-',
    permanentAddress: string ,
    mailingAddress:string,
    email:string ,
    contactNumber:string,
    emmergencyContactNumber:string,
    guardian: Guardian,
    profileImg?:string ,
    isActive:'active' | 'blocked'
}