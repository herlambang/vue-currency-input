import useCurrencyInput from './useCurrencyInput'
import CurrencyFormat from './currencyFormat'
import { CurrencyInputOptions } from './api'

/**
 * @deprecated Will be removed in next major release. Use the named export `useCurrencyInput` instead.
 */
export default useCurrencyInput
export * from './api'

const parse = (formattedValue: string, options: CurrencyInputOptions): number | null => {
  return new CurrencyFormat(options).parse(formattedValue)
}

const currencyFormat = (options: CurrencyInputOptions): CurrencyInputOptions => {
  return new CurrencyFormat(options)
}

export { useCurrencyInput, parse, currencyFormat }
