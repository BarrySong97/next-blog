/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardDataDTO } from '../models/DashboardDataDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AppService {

    /**
     * @returns DashboardDataDTO 
     * @throws ApiError
     */
    public static appControllerGetDashboardData(): CancelablePromise<DashboardDataDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard',
        });
    }

}
