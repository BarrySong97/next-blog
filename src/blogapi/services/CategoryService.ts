/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDTO } from '../models/CategoryDTO';
import type { CreateCategoryDto } from '../models/CreateCategoryDto';
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * @param requestBody 
     * @returns CategoryDTO 
     * @throws ApiError
     */
    public static categoryControllerCreate(
requestBody: CreateCategoryDto,
): CancelablePromise<CategoryDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/category',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CategoryDTO 
     * @throws ApiError
     */
    public static categoryControllerFindAll(): CancelablePromise<Array<CategoryDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/category',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static categoryControllerDeleteBatch(
requestBody: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/category/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns CategoryDTO 
     * @throws ApiError
     */
    public static categoryControllerFindOne(
id: string,
): CancelablePromise<CategoryDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/category/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns CategoryDTO 
     * @throws ApiError
     */
    public static categoryControllerUpdate(
id: string,
requestBody: UpdateCategoryDto,
): CancelablePromise<CategoryDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/category/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns CategoryDTO 
     * @throws ApiError
     */
    public static categoryControllerRemove(
id: string,
): CancelablePromise<CategoryDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/category/{id}',
            path: {
                'id': id,
            },
        });
    }

}
