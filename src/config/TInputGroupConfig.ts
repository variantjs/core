const TInputGroupConfig = {
  classes: {
    wrapper: '',
    label: 'block',
    body: '',
    feedback: 'text-gray-400 text-sm',
    description: 'text-gray-400 text-sm',
  },
};

export const TInputGroupClassesKeys = Object.keys(TInputGroupConfig.classes);

export type TInputGroupClassesValidKeys = keyof typeof TInputGroupConfig.classes;

export default TInputGroupConfig;
