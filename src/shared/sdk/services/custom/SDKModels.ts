/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { VMDMasteruserdata } from '../../models/VMDMasteruserdata';
import { VMDUsercredential } from '../../models/VMDUsercredential';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    VMDMasteruserdata: VMDMasteruserdata,
    VMDUsercredential: VMDUsercredential,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
