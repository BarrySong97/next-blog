/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePhotoDto } from '../models/CreatePhotoDto';
import type { PhotoDTO } from '../models/PhotoDTO';
import type { UpdatePhotoDto } from '../models/UpdatePhotoDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PhotosService {

    /**
     * @param requestBody 
     * @returns PhotoDTO 
     * @returns any 
     * @throws ApiError
     */
    public static photosControllerCreate(
requestBody: CreatePhotoDto,
): CancelablePromise<PhotoDTO | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/photos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @returns PhotoDTO 
     * @throws ApiError
     */
    public static photosControllerFindAll(): CancelablePromise<Array<Record<string, any>> | Array<PhotoDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/photos',
        });
    }

    /**
     * @returns PhotoDTO 
     * @throws ApiError
     */
    public static photosControllerFindRecent(): CancelablePromise<Array<PhotoDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/photos/recent',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static photosControllerDeleteBatch(
requestBody: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/photos/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @returns PhotoDTO 
     * @throws ApiError
     */
    public static photosControllerFindOne(
id: string,
): CancelablePromise<any | PhotoDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/photos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @returns PhotoDTO 
     * @throws ApiError
     */
    public static photosControllerUpdate(
id: string,
requestBody: UpdatePhotoDto,
): CancelablePromise<any | PhotoDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/photos/{id}',
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
     * @returns PhotoDTO 
     * @throws ApiError
     */
    public static photosControllerRemove(
id: string,
): CancelablePromise<any | PhotoDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/photos/{id}',
            path: {
                'id': id,
            },
        });
    }

}
