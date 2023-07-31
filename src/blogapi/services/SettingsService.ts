/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSettingDto } from '../models/CreateSettingDto';
import type { SettingDto } from '../models/SettingDto';
import type { UpdateSettingDto } from '../models/UpdateSettingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingsService {

    /**
     * @param requestBody 
     * @returns SettingDto 
     * @throws ApiError
     */
    public static settingsControllerCreate(
requestBody: CreateSettingDto,
): CancelablePromise<SettingDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SettingDto 
     * @throws ApiError
     */
    public static settingsControllerFind(): CancelablePromise<SettingDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings',
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns SettingDto 
     * @throws ApiError
     */
    public static settingsControllerUpdate(
id: string,
requestBody: UpdateSettingDto,
): CancelablePromise<SettingDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/settings/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
