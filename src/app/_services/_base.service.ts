import { Utils } from "../utils/utils";
import { IBaseService } from "./../../_core/services/base.service.interface";
import { apiBase } from "./../_libs/axios";
/**
 * Base Service
 * Where:
 * - W = WriteDto
 * - R = ReadDto
 * - L = ListDto
 * - F = FilterDto
 */
export class BaseService<W, R, L, F> implements IBaseService<W, R, L, F> {
  constructor(private controllerName: string, private api = apiBase) {}

  getByFilter(dto: F): Promise<L[]> {
    return this.api.get(this.controllerName + Utils.getQueryParams(dto));
  }

  create(dto: W): Promise<R> {
    return this.api.post(`${this.controllerName}`, dto);
  }

  update(dto: W): Promise<R> {
    return this.api.put(`${this.controllerName}`, dto);
  }

  delete(id: string): Promise<void> {
    return this.api.delete(`${this.controllerName}/${id}`);
  }

  activeOrInactive(id: string): Promise<boolean> {
    return this.api.put(`${this.controllerName}/${id}`, {});
  }
}
