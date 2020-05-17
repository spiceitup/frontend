import * as t from 'io-ts'

export const SpiceState = t.type({
  authUser: t.union([t.string, t.null])
}) 

export type SpiceState = t.TypeOf<typeof SpiceState>

export const UserCredential = t.type({
  username: t.string,
  password: t.string,
})

export type UserCredential = t.TypeOf<typeof UserCredential>