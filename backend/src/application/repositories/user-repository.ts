export abstract class UserRepository {
  abstract login(): Promise<void>;
}
