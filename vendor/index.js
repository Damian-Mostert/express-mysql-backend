//import options;
import { Serve } from "./serve.js";

//get sub option;
const extraOption = process.argv[3];

//switch for first option;
switch (process.argv[2]) {
  case "serve":
    Serve();
    break;
  case "seed":
    Seed(extraOption);
    break;
  case "migrate":
    Migrate(extraOption);
    break;
  case "make":
    Make(extraOption);
    break;
  default:
    throw new Error("Invalid option [" + extraOptio + "]");
}
