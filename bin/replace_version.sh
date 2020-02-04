#!/usr/bin/env bash
set -eux
current_version=$(cat $1 | perl -lne 'print $1 if /\@version\s+([0-9\.]+)/')
# XXX: プロジェクトルートから実行される前提
new_version=$(./bin/increment_semantic_version.sh -m $current_version)
perl -i -pne "s/${current_version}/${new_version}/" $1
