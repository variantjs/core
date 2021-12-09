import elementIsTargetOrTargetChild from '../helpers/getFocusableElements';

describe('elementIsTargetOrTargetChild', () => {
  it('returns a link ', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('a');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });

  it('returns a button', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('button');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });

  it('returns a input', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('input');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });

  it('returns a textarea', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('textarea');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });
  it('returns a select', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('select');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });
  it('returns a details', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('details');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });
  it('returns a contenteditable div', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('div');
    focusable.setAttribute('contenteditable', 'true');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });

  it('returns an element with a tab index of 0', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('div');
    focusable.setAttribute('tabindex', '0');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });

  it('returns an element with a positive tab index ', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('div');
    focusable.setAttribute('tabindex', '1');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([focusable]);
  });

  it('doesnt returns an element with a -1 tab index ', () => {
    const el = document.createElement('div');

    const focusable = document.createElement('div');
    focusable.setAttribute('tabindex', '-1');

    el.appendChild(focusable);

    expect(elementIsTargetOrTargetChild(el)).toEqual([]);
  });

  it('doesnt return any element that is disabled ', () => {
    const el = document.createElement('div');

    const els = ['a', 'button', 'input', 'textarea', 'select', 'details'];

    els.forEach((tagName) => {
      const focusable = document.createElement(tagName);
      focusable.setAttribute('disabled', 'disabled');
      el.appendChild(focusable);
    });

    const tabIndex = document.createElement('div');
    tabIndex.setAttribute('tabindex', '0');
    tabIndex.setAttribute('disabled', 'disabled');
    el.appendChild(tabIndex);

    const contentEditable = document.createElement('div');
    contentEditable.setAttribute('contenteditable', 'true');
    contentEditable.setAttribute('tabindex', '0');
    contentEditable.setAttribute('disabled', 'disabled');
    el.appendChild(contentEditable);

    expect(elementIsTargetOrTargetChild(el).length).toBe(0);
  });
});
