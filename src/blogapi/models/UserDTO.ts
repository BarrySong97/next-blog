/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserDTO = {
    role: UserDTO.role;
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
};

export namespace UserDTO {

    export enum role {
        ADMIN = 'ADMIN',
        USER = 'USER',
    }


}
