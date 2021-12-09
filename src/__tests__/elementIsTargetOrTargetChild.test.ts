import elementIsTargetOrTargetChild from '../helpers/elementIsTargetOrTargetChild';

describe('elementIsTargetOrTargetChild', () => {
  it('returns `true` if the element is the same ', () => {
    const div = document.createElement('div');

    const relatedTarget: EventTarget = div;

    expect(elementIsTargetOrTargetChild(relatedTarget, div)).toBe(true);
  });

  it('returns `true` if the element is a child of the wrapper ', () => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const span = document.createElement('span');

    div.appendChild(button);
    button.appendChild(span);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const relatedTarget: EventTarget = div.querySelector('span')!;

    expect(elementIsTargetOrTargetChild(relatedTarget, div)).toBe(true);
  });

  it('returns `false` if the element is not a child of the wrapper ', () => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const span = document.createElement('span');

    div.appendChild(button);
    div.appendChild(span);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const relatedTarget: EventTarget = div.querySelector('span')!;

    expect(elementIsTargetOrTargetChild(relatedTarget, button)).toBe(false);
  });

  it('returns `false` if the element is null', () => {
    const div = document.createElement('div');

    expect(elementIsTargetOrTargetChild(null, div)).toBe(false);
  });
});
