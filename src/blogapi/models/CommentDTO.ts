/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDTO } from './UserDTO';

export type CommentDTO = {
    id: string;
    createdAt: string;
    updatedAt: string;
    content: string;
    postId: string;
    parentId?: string;
    replyToId?: string;
    children?: Array<CommentDTO>;
    replies?: Array<CommentDTO>;
    author: UserDTO;
};
