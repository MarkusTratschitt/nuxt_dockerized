export default defineEventHandler(async (event) => {

    // Check if the user is authenticated
    const user = event.context.user;

    if (!user) {
        
        return sendError(event, createError({ statusCode: 403, statusMessage: 'Unauthorized' }));
        }

    // If the user is authenticated, return their data
    return { 
        message: 'Hallo, ${user.username' 
    }
});