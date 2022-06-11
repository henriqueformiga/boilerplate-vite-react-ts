import { IAuthService } from './../../_core/services/auth.service.interface';
import { BaseRawService } from './_base-raw.service';

export class AuthService extends BaseRawService implements IAuthService {

  constructor() {
    super('auth')
  }

  signin(callback: VoidFunction): Promise<void> {
    throw new Error('Method not implemented.');
  }
  signout(callback: VoidFunction): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
