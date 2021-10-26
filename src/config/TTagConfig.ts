const TTagConfig = {
  classes: {
    // @tw
    wrapper: '',
  },
};

export const TTagClassesKeys = Object.keys(TTagConfig.classes);

export type TTagClassesValidKeys = keyof typeof TTagConfig.classes;

export default TTagConfig;
