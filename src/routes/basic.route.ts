import { Router } from "express";

abstract class BasicRoute {
  private _apiPrefix = '/api';
  protected _apiRoot = '';
  protected router = Router();

  public get apiRoot(): string {
    return this._apiRoot === '' ? '' : `/${this._apiRoot}`
  }

  constructor(apiRoot: string = '') {
    this._apiRoot = apiRoot;
  }

  protected abstract setRoutes(): void;

  public getApiPrefix() {
    return this._apiPrefix;
  }

  public getRouter() {
    return this.router;
  }

  public api(api: string = ''): string {
    return api === '' ? this.apiRoot : `${this.apiRoot}/${api}`;
  }
}

export default BasicRoute;