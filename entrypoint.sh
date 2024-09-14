# backend/entrypoint.sh

# Entrypoint for the backend

# Check if Prisma has been generated
if [ ! -d "node_modules/.prisma/client" ]; then
    echo "Prisma has not been generated yet. Generating..."
    npx prisma generate
else
    echo "Prisma has already been generated. Skipping..."
fi

# Start the server
npm run start
