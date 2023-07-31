/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCommentDto } from '../models/CreateCommentDto';
import type { UpdateCommentDto } from '../models/UpdateCommentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns string 
     * @throws ApiError
     */
    public static appControllerGetHello(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * @param name 
     * @returns string 
     * @throws ApiError
     */
    public static appControllerGetHelloName(
name: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hello/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns string 
     * @throws ApiError
     */
    public static commentsControllerCreate(
requestBody: CreateCommentDto,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns string 
     * @throws ApiError
     */
    public static commentsControllerFindAll(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comments',
        });
    }

    /**
     * @param id 
     * @returns string 
     * @throws ApiError
     */
    public static commentsControllerFindOne(
id: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns string 
     * @throws ApiError
     */
    public static commentsControllerUpdate(
id: string,
requestBody: UpdateCommentDto,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns string 
     * @throws ApiError
     */
    public static commentsControllerRemove(
id: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
        });
    }

}
