/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryDTO } from './CategoryDTO';

export type PostDTO = {
    id: string;
    createdAt: string;
    updatedAt: string;
    category: CategoryDTO;
    title: string;
    content: string;
    authorId: string;
    categoryId: string;
    cover: string;
    html: string;
    toc: string;
};
