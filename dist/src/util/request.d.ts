/// <reference types="node" />
/**
 * create dictonary of version based on ids and version value.
 */
export declare const versions: (ids: number[], version: number) => {
    [key: string]: number;
};
/**
 * create dictonary array of items based on fields and values.
 */
export declare const items: (fields: string[], values: unknown[]) => {
    [key: string]: unknown;
}[];
/**
 *  Perform a read request
 *
 * @param req - the request body
 */
export declare const readRequest: (req: unknown) => Promise<Response>;
