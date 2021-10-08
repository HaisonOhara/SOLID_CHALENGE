import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (user) {
      this.usersRepository.turnAdmin(user);
      return user;
    }
    throw new Error("It is not possible to turn a non existing user as admin");
  }
}

export { TurnUserAdminUseCase };
