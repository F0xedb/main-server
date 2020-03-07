#!/bin/bash

file=$(mktemp)
# setup plugins in grafana as described in the plugins.conf file
while IFS= read -r line; do
    echo "$line" >> "$file"
done <<< $(sed -e 's:^\s*#.*$::g' -e '/^\s*$/d' plugins.conf)

# find docker is's for all grafana instances
containers="$(docker ps | grep grafana | awk '{printf $1}')"

for instance in $containers; do
    docker exec -it "$instance" /bin/bash <"$file"
done
echo "Executed the following commands:"
cat "$file"
rm "$file"

echo "For this to take effect you have to restart the container"