
import { EXPRESS_APP } from "./app";
const PORT = process.env.PORT || 3000;

EXPRESS_APP.listen(PORT, () => {
  console.log('Express server listening on Port ', PORT);
})