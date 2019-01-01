#!/bin/bash

API_HOST=http://localhost:8001

# Get all pages.
curl -v $API_HOST/api/pages | jq

# Create a new page.
curl -v $API_HOST/api/pages \
  --header 'content-type: application/json' \
  -d '{
    "content": "Aderp derp derp derp derp",
    "summary": "Derp!"
  }' \
| jq

# Get all pages again.
curl -v $API_HOST/api/pages | jq
