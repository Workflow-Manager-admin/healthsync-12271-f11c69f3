#!/bin/bash
cd /home/kavia/workspace/code-generation/healthsync-12271-f11c69f3/healthsync_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

