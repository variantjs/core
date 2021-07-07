const getFocusableElements = (element: Element): Array<Element> => Array.from(element.querySelectorAll(
  'a, button, input, textarea, select, details, [contenteditable], [tabindex]:not([tabindex="-1"])',
)).filter((el) => !el.hasAttribute('disabled'));

export default getFocusableElements;
