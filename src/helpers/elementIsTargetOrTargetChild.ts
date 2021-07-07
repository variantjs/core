const elementIsTargetOrTargetChild = (relatedTarget: EventTarget | null, wrapper: HTMLElement) : boolean => {
  if (!(relatedTarget instanceof Element)) {
    return false;
  }

  return wrapper.contains(relatedTarget);
};

export default elementIsTargetOrTargetChild;
