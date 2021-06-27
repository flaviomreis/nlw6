import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { verifyAdmin } from "./middlewares/verifyAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { verifyAuthentication } from "./middlewares/verifyAuthentication";
import { ListReceivedComplimentsController } from "./controllers/ListReceivedComplimentsController";
import { ListSendedComplimentsController } from "./controllers/ListSendedComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createCommplimentController = new CreateComplimentController();
const listReceivedComplimentsController =
  new ListReceivedComplimentsController();
const listSendedComplimetnsController = new ListSendedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post(
  "/users",
  verifyAuthentication,
  verifyAdmin,
  createUserController.handle
);
router.get("/users", verifyAuthentication, listUsersController.handle);
router.get("/tags", verifyAuthentication, listTagsController.handle);
router.post(
  "/tags",
  verifyAuthentication,
  verifyAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  verifyAuthentication,
  createCommplimentController.handle
);
router.get(
  "/user/compliments/received",
  verifyAuthentication,
  listReceivedComplimentsController.handle
);
router.get(
  "/user/compliments/sended",
  verifyAuthentication,
  listSendedComplimetnsController.handle
);

export { router };
