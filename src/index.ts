
import { EXPRESS_APP } from "./app";
const PORT = 3000;

EXPRESS_APP.listen(PORT, () => {
  console.log('Express server listening on Port ', PORT);
})