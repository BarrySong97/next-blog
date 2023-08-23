/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDto } from '../models/CreatePostDto';
import type { PostDTO } from '../models/PostDTO';
import type { UpdatePostDto } from '../models/UpdatePostDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * @param requestBody 
     * @returns PostDTO 
     * @returns any 
     * @throws ApiError
     */
    public static postControllerCreate(
requestBody: CreatePostDto,
): CancelablePromise<PostDTO | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param search 
     * @returns PostDTO 
     * @throws ApiError
     */
    public static postControllerFindAll(
search: string,
): CancelablePromise<Array<PostDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
            query: {
                'search': search,
            },
        });
    }

    /**
     * @returns PostDTO 
     * @throws ApiError
     */
    public static postControllerFindRecent(): CancelablePromise<Array<PostDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/recent',
        });
    }

    /**
     * @param id 
     * @returns PostDTO 
     * @throws ApiError
     */
    public static postControllerFindOne(
id: string,
): CancelablePromise<PostDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @returns PostDTO 
     * @throws ApiError
     */
    public static postControllerUpdate(
id: string,
requestBody: UpdatePostDto,
): CancelablePromise<any | PostDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @returns PostDTO 
     * @throws ApiError
     */
    public static postControllerRemove(
id: string,
): CancelablePromise<any | PostDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
        });
    }

}
