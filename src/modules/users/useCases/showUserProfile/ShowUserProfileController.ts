import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userSearched = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).send(userSearched);
    } catch (err) {
      return response.status(404).send({ error: err });
    }
  }
}

export { ShowUserProfileController };
