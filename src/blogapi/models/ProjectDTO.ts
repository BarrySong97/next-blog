/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PostDTO } from './PostDTO';

export type ProjectDTO = {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    url: string;
    image: string;
    content: string;
    github: string;
    post: PostDTO;
};
