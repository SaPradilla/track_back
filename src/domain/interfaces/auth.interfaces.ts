

export interface UserAuthToken {
    msg:string;
    token: string;
    user:{
        id:string;
        name:string;
        email:string;
    }
}