import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const upgradedUser = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).send(upgradedUser);
    } catch (err) {
      return response.status(404).send({ error: err });
    }
  }
}

export { TurnUserAdminController };
