/**
 * Base Interface Service
 * Where:
 * - W = WriteDto
 * - R = ReadDto
 * - L = ListDto
 * - F = FilterDto
 */
export interface IBaseService<W, R, L, F> {

  getByFilter(dto: F): Promise<L[]>;

  create(dto: W): Promise<R>;

  update(dto: W): Promise<R>;

  delete(id: string): Promise<void>;

  activeOrInactive(id: string): Promise<boolean>;

}
