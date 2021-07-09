interface SchemaNode {
  children?: {
    [key:string]: SchemaNode
  } | string;
  [key:string]: string | {
    [key:string]: SchemaNode
  } | undefined;
}

const buildSvgNode = <P extends SchemaNode>(tag: string, attributes: P): SVGElement => {
  const node = document.createElementNS('http://www.w3.org/2000/svg', tag);

  Object.keys(attributes).forEach((key) => {
    node.setAttributeNS(null, key, attributes[key] as string);
  });

  return node;
};

const buildSvgFromSchema = (schema: SchemaNode, nodeName?: string): SVGElement => {
  const { children, ...attrs } = schema;

  const node = buildSvgNode(typeof nodeName === 'string' ? nodeName : 'svg', attrs);

  if (typeof children === 'object') {
    Object.keys(children).forEach((childrenNodeName) => {
      node.appendChild(buildSvgFromSchema(children[childrenNodeName], childrenNodeName));
    });
  }

  return node;
};

export default buildSvgFromSchema;
