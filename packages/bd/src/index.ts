import { math } from "@ts-codex/utils";
import { model } from "./schema/services/model";
import { def } from "./type/services/def";

const PersonDTO = model(
  {
    id: def('uuid'),
    nome: def('string'),
    info: {
      id: def('uuid'),
      dataNascimento: def('date'),
    },
    credentials: [
      {
        id: def('uuid'),
        name: def('string'),
        qtde: def('int'),
        date: def('date'),
      },
    ],
    books: [def('uuid')],
  },
  "Person"
)

const jose = new PersonDTO({
  id: math.uuid(),
  nome: "jose",
  info: {
    id: math.uuid(),
    dataNascimento: new Date,
  },
  credentials: [
    {
      id: math.uuid(),
      date: new Date(),
      name: "José",
      qtde: 2,
    },
  ],
  books: [math.uuid()],
});

console.log(jose);