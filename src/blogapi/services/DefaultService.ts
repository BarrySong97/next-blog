/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentDTO } from '../models/CommentDTO';
import type { CreateCommentDto } from '../models/CreateCommentDto';
import type { UpdateCommentDto } from '../models/UpdateCommentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param requestBody 
     * @returns CommentDTO 
     * @throws ApiError
     */
    public static commentsControllerCreate(
requestBody: CreateCommentDto,
): CancelablePromise<CommentDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static commentsControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
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
     * @returns any 
     * @throws ApiError
     */
    public static commentsControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
        });
    }

}
