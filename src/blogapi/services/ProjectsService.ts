/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectDto } from '../models/CreateProjectDto';
import type { ProjectDTO } from '../models/ProjectDTO';
import type { UpdateProjectDto } from '../models/UpdateProjectDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectsService {

    /**
     * @param requestBody 
     * @returns ProjectDTO 
     * @throws ApiError
     */
    public static projectsControllerCreate(
requestBody: CreateProjectDto,
): CancelablePromise<ProjectDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ProjectDTO 
     * @throws ApiError
     */
    public static projectsControllerFindAll(): CancelablePromise<Array<ProjectDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
        });
    }

    /**
     * @param id 
     * @returns ProjectDTO 
     * @throws ApiError
     */
    public static projectsControllerFindOne(
id: string,
): CancelablePromise<ProjectDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns ProjectDTO 
     * @throws ApiError
     */
    public static projectsControllerUpdate(
id: string,
requestBody: UpdateProjectDto,
): CancelablePromise<ProjectDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns ProjectDTO 
     * @throws ApiError
     */
    public static projectsControllerRemove(
id: string,
): CancelablePromise<ProjectDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static projectsControllerDeleteBatch(
requestBody: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
