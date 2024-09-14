// backend/server/middleware/info.ts

export default defineEventHandler(async (event) => {
  // Retrieve the session data for the current request using the custom session helper (useSessionX)
  // The 'iSessionRet' interface is used to define the structure of the session data
  let session = await useSessionX<iSessionRet>(event);

  // Log the request URL and session data to the server console
  // 'getRequestURL(event)' extracts the URL from the event
  // 'session.data' contains the session data retrieved for the request
  console.log("New request: " + getRequestURL(event), session.data);
});
