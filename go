#!/usr/bin/env bash
set -e -o pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd -P)

goal_run() {
  npm start
}

goal_test() {
  npm t
}

goal_linter() {
  npm run linter
}

goal_linter-js() {
  npm run linter:js
}

goal_linter-css() {
  npm run linter:css
}

validate-args() {
  acceptable_args="$(declare -F | sed -n "s/declare -f goal_//p" | tr '\n' ' ')"

  if [[ -z $1 ]]; then
    echo "usage: $0 <goal>"
    printf "\n$(declare -F | sed -n "s/declare -f goal_/ - /p")"
    exit 1
  fi

  if [[ ! " $acceptable_args " =~ .*\ $1\ .* ]]; then
    echo "Invalid argument: $1"
    printf "\n$(declare -F | sed -n "s/declare -f goal_/ - /p")"
    exit 1
  fi
}

CMD=${1:-}
shift || true
if validate-args "${CMD}"; then
  "goal_${CMD}"
  exit 0
fi
