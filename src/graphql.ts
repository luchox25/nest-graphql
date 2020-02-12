
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface CreatePostInput {
    title?: string;
}

export interface VotePostInput {
    id?: number;
    vote?: number;
}

export interface IMutation {
    createPost(createPostInput?: CreatePostInput): Post | Promise<Post>;
    votePost(votePostInput?: VotePostInput): Post | Promise<Post>;
}

export interface Post {
    id?: number;
    title?: string;
    vote?: number;
}

export interface IQuery {
    getPosts(): Post[] | Promise<Post[]>;
    post(id: string): Post | Promise<Post>;
}

export interface ISubscription {
    postCreated(): Post | Promise<Post>;
    postVoted(): Post | Promise<Post>;
}
