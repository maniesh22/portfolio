#!/usr/bin/env bash
set -e
echo "Validating Node and npm..."
node -v || (echo "Node is not installed"; exit 1)
npm -v || (echo "npm is not installed"; exit 1)
echo "Installing dependencies..."
npm ci
echo "Done. Run 'npm run dev' to start the dev server."
