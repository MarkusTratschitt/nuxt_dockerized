// backend/server/utils/sessionHelpers.ts
import type { H3Event, SessionConfig } from "h3";

export default {};

export const useSessionX = (event: H3Event) =>
  useSessionX<iSessionRet>(event, useRuntimeConfig().session as SessionConfig);
// => Promise returns update(), clear(), .id, .data

// -- in case you want to use the other session methods below, but it is preferred to use useSession's returned control object --

// get session without the methods
export const getSessionX = (event: H3Event) =>
  getSession<iSessionRet>(event, useRuntimeConfig().session as SessionConfig);

// restricted to object only - the original takes a fn returning an obj or obj
export const updateSessionX = (event: H3Event, update: iSessionRet) =>
  updateSession<iSessionRet>(
    event,
    useRuntimeConfig().session as SessionConfig,
    update
  );

export const clearSessionX = (event: H3Event) =>
  clearSession(event, useRuntimeConfig().session as SessionConfig);

// ...add the others here:

/// Seals: are not tied to cookies. This way you can seal and unseal any object in your application and move seals around to login users.
// sealSession(event, config) => Promise<string>
//  -- You can use it to seal any data you want and pass it around. One usecase are magic links: you generate a seal that contains a user id to login and send it to a route on your website (like /magic-login). Once received, you can safely decode the seal with unsealData and log the user in.
// unsealSession(event, config, sealed:string) => Promise<Partial<Session<SessionDataT>>>
//  -- SessionDataT === iSessionRet
//  -- This is the opposite of sealData and allow you to decode a seal to get the original data back.
