export type NormalizedOptions = Array<NormalizedOption>

export type InputOptionValue = string | number | undefined | null

export type InputOptionText = string | number | undefined

export type NormalizedOption = {
  value: InputOptionValue
  text: InputOptionText
  raw?: InputOption
  children?: NormalizedOptions
  disabled?: boolean | 'disabled'
}

export type InputOptions = Array<InputOption> | { [key: string]: InputOptionText }

export type InputOptionObject = {
  value?: InputOptionValue
  text?: InputOptionText
  disabled?: boolean | undefined
  children?: InputOptions
  [key: string]: unknown
}

export type InputOption = InputOptionObject | string | number
