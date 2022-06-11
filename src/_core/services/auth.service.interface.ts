export interface IAuthService {
  signin(callback: VoidFunction): Promise<void>;
  signout(callback: VoidFunction): Promise<void>;
}
