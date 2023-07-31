/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Auth } from '../models/Auth';
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param code 
     * @returns Auth 
     * @throws ApiError
     */
    public static authControllerGoogleLogin(
code: string,
): CancelablePromise<Auth> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/google',
            query: {
                'code': code,
            },
        });
    }

    /**
     * @returns UserDTO 
     * @throws ApiError
     */
    public static authControllerMe(): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/me',
        });
    }

}
