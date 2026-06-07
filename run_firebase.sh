#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

if [ "$1" = "deploy" ]; then
  echo "--- Committing and pushing to GitHub ---"
  git add .
  git commit -m "Auto-deploy update: $(date)"
  git push
  echo "--- GitHub Sync Complete ---"
  echo ""
fi

firebase "$@"
