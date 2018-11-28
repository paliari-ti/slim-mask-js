import maskit from '@/lib/maskit'

const tokens = {
  '#': { pattern: /\d/ },
  X: { pattern: /[0-9a-zA-Z]/ },
  S: { pattern: /[a-zA-Z]/ },
  A: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
  a: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase() },
  '!': { escape: true }
}

it('custom tokens', () => {
  const str = maskit('5544999999999', '+## (##) # ####-####', tokens)
  expect(str).toBe('+55 (44) 9 9999-9999')
})

it('escape', () => {
  const str = maskit('1234', '##!###', tokens)
  expect(str).toBe('12#34')
})

it('on mask.length < iMask', () => {
  const str = maskit('1234', '####-#', tokens)
  expect(str).toBe('1234')
})

it('mask and value is undefined', () => {
  const str = maskit(undefined, undefined, tokens)
  expect(str).toBe('')
})

it('mask pattern equal value', () => {
  const str = maskit('aAAAA', 'aAAAA', tokens)
  expect(str).toBe('aAAAA')
})

it('mask number equal value', () => {
  const str = maskit('9999-44', '####-##', tokens)
  expect(str).toBe('9999-44')
})

it('exclude char if not in pattern', () => {
  const str = maskit('999a9-22', '####-##', tokens)
  expect(str).toBe('9999-22')
})
