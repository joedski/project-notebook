#!/bin/bash

API_HOST=http://localhost:8000

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

# Update page 1
curl -v -X PUT $API_HOST/api/pages/1 \
  --header 'content-type: application/json'\
  -d '{
    "content": "Bwuuuuurrrrp",
    "summary": "burp"
  }' \
| jq

# Get page 1
curl -v $API_HOST/api/pages/1 | jq
