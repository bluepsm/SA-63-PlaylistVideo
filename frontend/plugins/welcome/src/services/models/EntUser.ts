/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API Playlist Vidoe
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntUserEdges,
    EntUserEdgesFromJSON,
    EntUserEdgesFromJSONTyped,
    EntUserEdgesToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntUser
 */
export interface EntUser {
    /**
     * Age holds the value of the "age" field.
     * @type {number}
     * @memberof EntUser
     */
    age?: number;
    /**
     * 
     * @type {EntUserEdges}
     * @memberof EntUser
     */
    edges?: EntUserEdges;
    /**
     * Email holds the value of the "email" field.
     * @type {string}
     * @memberof EntUser
     */
    email?: string;
    /**
     * ID of the ent.
     * @type {number}
     * @memberof EntUser
     */
    id?: number;
    /**
     * IdentificationNumber holds the value of the "identification_number" field.
     * @type {string}
     * @memberof EntUser
     */
    identificationNumber?: string;
    /**
     * Name holds the value of the "name" field.
     * @type {string}
     * @memberof EntUser
     */
    name?: string;
    /**
     * StudentID holds the value of the "student_id" field.
     * @type {string}
     * @memberof EntUser
     */
    studentId?: string;
}

export function EntUserFromJSON(json: any): EntUser {
    return EntUserFromJSONTyped(json, false);
}

export function EntUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'age': !exists(json, 'age') ? undefined : json['age'],
        'edges': !exists(json, 'edges') ? undefined : EntUserEdgesFromJSON(json['edges']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identificationNumber': !exists(json, 'identification_number') ? undefined : json['identification_number'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'studentId': !exists(json, 'student_id') ? undefined : json['student_id'],
    };
}

export function EntUserToJSON(value?: EntUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'age': value.age,
        'edges': EntUserEdgesToJSON(value.edges),
        'email': value.email,
        'id': value.id,
        'identification_number': value.identificationNumber,
        'name': value.name,
        'student_id': value.studentId,
    };
}


