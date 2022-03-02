import { emojid as uuid } from './../src/index.ts';
import { opine } from "https://deno.land/x/opine/mod.ts";
import {
  OpineRequest as Req,
  OpineResponse as Res,
} from "https://deno.land/x/opine@2.1.2/src/types.ts";

const app = opine();

app.set("json spaces", 2);

app.get("/", (req: Req, res: Res) => {
  const id = uuid();

  res.json({
    id,
    url: `${req.protocol}://${req.get('host')}/${id}`,
    message: "Use this endpoint to get a new UUID",
  });
});

app.get("/:id", (req: Req, res: Res) => {
  const { id } = req.params;
  res.send(`
    <body style="text-align: center; display: flex; justify-content: center; align-items: center; ">
    <h1 style="font-size: 50px">${id}</h1>
    </body>
  `);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});