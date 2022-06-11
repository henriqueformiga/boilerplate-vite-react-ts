import { apiBase } from "./../_libs/axios";

export class BaseRawService {
  constructor(private controllerName: string, private api = apiBase) {}
}
