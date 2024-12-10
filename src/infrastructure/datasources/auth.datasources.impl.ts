import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDatasourse,CustomError,RegisterUserDto,UserEntity } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserMapper } from "../mappers/user.mapper";

type HashFunciton = (passowrd:string) => string;
type CompareFuncion = (password: string, hashed: string) => boolean

export class AuthDatasourceImpl implements AuthDatasourse {


    constructor(
        private readonly hashPassword : HashFunciton = BcryptAdapter.hash,
        private readonly comparePassword : CompareFuncion = BcryptAdapter.compare
    ){}

    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const { email,password } = loginUserDto;
        try {
            
            const user = await UserModel.findOne({
                email:email
            });

            if(!user) throw CustomError.unauthorized('Incorrect Credentials');

            if(!this.comparePassword( password, user.password ) ) throw CustomError.unauthorized('Incorrect Credentials');
            
            await user.save();

            return UserMapper.userEntityFromObject(user)

        } catch (error) {
            if(error instanceof CustomError){
                throw error;
            }    
            throw CustomError.internalServer()
        }

    }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const {name,email,password} = registerUserDto
        
        try {
            // Verificar que el correo exista
            
            const existsEmail = await UserModel.findOne({ email: email});
            if(existsEmail) throw CustomError.badRequest('User already exists');

            const user = await UserModel.create({
                name:name,
                email: email,
                password: this.hashPassword(password)
            });
            // Guarda en al db
            await user.save()
            // Mapear la respueta a nuestra entidad
            return UserMapper.userEntityFromObject(user)

        } catch (error) {
            if(error instanceof CustomError){
                throw error;
            }    
            throw CustomError.internalServer()
        }
    }

    
}