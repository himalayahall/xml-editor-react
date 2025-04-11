import { create, XMLBuilder } from 'xmlbuilder2';

export const formDataToXml = (schema: any, data: any): string => {
  const doc = create({ version: '1.0' });
  const root = buildNode(doc, schema, data);
  return root.end({ prettyPrint: true });
};

const buildNode = (parent: XMLBuilder, schema: any, data: any) => {
  const tagName = schema.xml?.name || schema.title || 'root';
  const node = parent.ele(tagName);

  if (schema.type === 'object' && schema.properties) {
    for (const [key, propSchema] of Object.entries(schema.properties)) {
      if (data[key] !== undefined) {
        buildNode(node, propSchema, data[key]);
      }
    }
  } else if (schema.type === 'array') {
    data.forEach((item: any) => {
      buildNode(node, schema.items, item);
    });
  } else {
    node.txt(data?.toString() || '');
  }

  return node;
};

