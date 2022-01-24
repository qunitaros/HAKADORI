#!/bin/bash
set -e

# railsのpidが存在している場合に削除する」処理
rm -f /aiueo/tmp/pids/server.pid

# DockerfileのCMDで渡されたコマンド（→Railsのサーバー起動）を実行
exec "$@"