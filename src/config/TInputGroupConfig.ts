const TInputGroupConfig = {
  classes: {
    // @tw
    wrapper: '',
    // @tw
    label: 'block',
    // @tw
    body: '',
    // @tw
    feedback: 'text-sm text-gray-400',
    // @tw
    description: 'text-sm text-gray-400',
  },
};

export const TInputGroupClassesKeys = Object.keys(TInputGroupConfig.classes);

export type TInputGroupClassesValidKeys = keyof typeof TInputGroupConfig.classes;

export default TInputGroupConfig;
