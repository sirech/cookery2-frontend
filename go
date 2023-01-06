#!/usr/bin/env bash
set -e -o pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd -P)

_npm() {
  if [ -z "${CI:-}" ] ; then
    n exec auto npm "$@"
  else
    npm "$@"
  fi
}

goal_linter-js() {
  _npm run linter:js
}

goal_linter-css() {
  _npm run linter:css
}

goal_test-js() {
  _npm test
}

goal_run() {
  _npm run start
}

goal_build() {
  DISABLE_ESLINT_PLUGIN=true _npm run build
}

goal_all() {
  goal_linter-js
  # goal_linter-css
  CI=t goal_test-js
  goal_build
}

validate-args() {
  acceptable_args="$(declare -F | sed -n "s/declare -f goal_//p" | tr '\n' ' ')"

  if [[ -z $1 ]]; then
    echo "usage: $0 <goal>"
    # shellcheck disable=SC2059
    printf "\n$(declare -F | sed -n "s/declare -f goal_/ - /p")"
    exit 1
  fi

  if [[ ! " $acceptable_args " =~ .*\ $1\ .* ]]; then
    echo "Invalid argument: $1"
    # shellcheck disable=SC2059
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
