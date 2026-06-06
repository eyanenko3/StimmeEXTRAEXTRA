#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
node -c src/app/page.js
node -c src/components/loops/pagination-dots.js
node -c src/components/loops/top-bar.js
node -c src/components/loops/status-pill.js
node -c src/components/loops/hero-story-card.js
node -c src/components/loops/explainer-card.js
node -c src/components/loops/inset-impact-panel.js
node -c src/components/ui/card.js
node -c src/components/ui/icon-button.js
node -c src/lib/content.js
node -c src/lib/tokens.js

