

export class UserEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public pasword: string,
        public roles: string[],
    ){}

}