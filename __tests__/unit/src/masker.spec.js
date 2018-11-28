import masker from '@/masker'
import maskit from '@/lib/maskit'

jest.mock('@/lib/maskit', () => jest.fn())
jest.mock('@/lib/tokens', () => ({
  test: 'object test ;)'
}))

it('call maskit with params', () => {
  masker('test', '##aSS')
  expect(maskit).toBeCalledTimes(1)
  expect(maskit).toBeCalledWith('test', '##aSS', { test: 'object test ;)' })
})
