#!/bin/sh
# Biome exits 0 on info-level diagnostics and has no flag to fail on them, so
# copy every diagnostic into a GitHub-annotation report and fail if it is non-empty.
set -eu
report=$(mktemp)
trap 'rm -f "$report"' EXIT
biome "$@" --reporter=default --reporter=github --reporter-file="$report"
if [ -s "$report" ]; then
	echo "Biome reported diagnostics; every severity fails the lint." >&2
	exit 1
fi
