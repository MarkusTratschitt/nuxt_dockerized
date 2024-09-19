// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/login.post').default>>>>
    }
    '/api/login': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/login').default>>>>
    }
    '/api/protected': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/protected').default>>>>
    }
    '/api/session/bar': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/session/bar.get').default>>>>
    }
    '/api/session/foo': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/session/foo.get').default>>>>
    }
    '/api/test-db': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/test-db').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}