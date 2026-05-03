#!/bin/bash

# Directory containing images
IMAGE_DIR="public/assets"
OUTPUT_FILE="src/data/placeholders.json"

# Create output directory if it doesn't exist
mkdir -p src/data

echo "{" > $OUTPUT_FILE

first=true
for img in $IMAGE_DIR/*.{png,jpg,jpeg}; do
  # Check if file exists to handle cases where glob might not match
  [ -e "$img" ] || continue
  
  filename=$(basename "$img")
  # Use full filename (including extension) as key for easier mapping
  
  echo "Processing $filename..."
  
  # Generate base64 LQIP
  # resize to 20x20 and add a slight blur for a smooth effect
  b64=$(convert "$img" -resize 20x20 -blur 0x2 jpg:- | base64 -w 0)
  
  if [ "$first" = true ]; then
    first=false
  else
    echo "," >> $OUTPUT_FILE
  fi
  
  echo -n "  \"$filename\": \"data:image/jpeg;base64,$b64\"" >> $OUTPUT_FILE
done

echo "" >> $OUTPUT_FILE
echo "}" >> $OUTPUT_FILE

echo "Placeholders generated in $OUTPUT_FILE"
