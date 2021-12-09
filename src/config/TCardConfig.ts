export const TCardConfig = {
  classes: {
    // @tw
    wrapper: 'bg-white border border-gray-100 rounded shadow-sm',
    // @tw
    body: 'p-3',
    // @tw
    header: 'p-3 border-b border-gray-100 rounded-t',
    // @tw
    footer: 'p-3 border-t border-gray-100 rounded-b',
  },
}

export const TCardClassesKeys = Object.keys(TCardConfig.classes)

export type TCardClassesValidKeys = keyof typeof TCardConfig.classes

export default TCardConfig
