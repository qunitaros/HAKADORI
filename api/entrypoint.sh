#!/bin/bash
set -e

# railsのpidが存在している場合に削除する」処理
rm -f /aiueo/tmp/pids/server.pid

# DockerfileのCMDで渡されたコマンド（→Railsのサーバー起動）を実行
exec "$@"

# Nginx の起動、 Rails のセットアップ、 puma の起動
sudo service nginx start
cd /myapp
bin/setup
bundle exec pumactl start
