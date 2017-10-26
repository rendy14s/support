/* tslint:disable */

declare var Object: any;
export interface VMDUsercredentialInterface {
  "realm": string;
  "username": string;
  "id"?: number;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
}

export class VMDUsercredential implements VMDUsercredentialInterface {
  "realm": string;
  "username": string;
  "id": number;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: VMDUsercredentialInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VMDUsercredential`.
   */
  public static getModelName() {
    return "VMDUsercredential";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VMDUsercredential for dynamic purposes.
  **/
  public static factory(data: VMDUsercredentialInterface): VMDUsercredential{
    return new VMDUsercredential(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'VMDUsercredential',
      plural: 'VMDUsercredentials',
      path: 'VMDUsercredentials',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
