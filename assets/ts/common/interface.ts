import * as t from 'io-ts'

export const breadcrumb = t.type({
  text: t.string,
  href: t.string,
  disabled: t.boolean
})

export type Breadcrumb = t.TypeOf<typeof breadcrumb>

export function Breadcrumb(text: string,href: string,disabled: boolean): Breadcrumb {
  return {text: text.toLocaleUpperCase(), href, disabled}
}