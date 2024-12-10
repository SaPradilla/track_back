import { JwtAdapter } from "../../../config";
import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { CustomError } from "../../errors/custom.error";
import { UserAuthToken } from "../../interfaces/auth.interfaces";
import { AuthRepository } from "../../repositories/auth.repositories";


type SingToken = (payload: Object, duration?:string) => Promise<string | null>;

interface LoginUserUseCase {
    execute( loginUserDto: LoginUserDto ) : Promise<UserAuthToken>
}

export class LoginUser implements LoginUserUseCase{

    constructor (
        private readonly authRepository : AuthRepository,
        private readonly singToken : SingToken = JwtAdapter.generateToken,
    ){}


    async execute(loginUserDto: LoginUserDto): Promise<UserAuthToken> {
        
        // TODO:

        // buscar usuario por correo
        const user = await this.authRepository.login( loginUserDto );

        // obtener token

        const token = await this.singToken( {id:user.id}, '2h' );
        if ( !token ) throw CustomError.internalServer('Error generate token');


        return {
            msg:'Inicio de sesion exitoso',
            token:token,
            user:{
                id: user.id,
                name: user.name,
                email:user.email  
            }

        }

    }


}


