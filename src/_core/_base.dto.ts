export class BaseDto {
  id?: string;
  updated_at?: string;
  created_at?: string;
  active?: boolean;

  constructor(obj?: any) {
    if (obj) {
      this.id = obj?.id;
      this.updated_at = obj?.updated_at;
      this.created_at = obj?.created_at;
      this.active = obj?.active;
    }
  }
}
