export const personSchema = {
  title: "Person",
  type: "object",
  xml: { name: "Person" },
  properties: {
    name: { type: "string", xml: { name: "name" } },
    age: { type: "integer", xml: { name: "age" } }
  },
  required: ["name"]
};

