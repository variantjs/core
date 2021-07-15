const TInputGroupConfig = {
  classes: {
    wrapper: '',
    label: 'block',
    body: '',
    feedback: 'text-gray-400 text-sm',
    description: 'text-gray-400 text-sm',
  },
};

export type TInputGroupConfigKeys = keyof typeof TInputGroupConfig.classes;

export default TInputGroupConfig;
