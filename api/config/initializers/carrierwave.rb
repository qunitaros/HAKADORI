require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.cache_storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: 'AKIAZQNETPQ5DZQPIJE3',
    aws_secret_access_key: '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',
    region: 'ap-northeast-1'
  }

  config.fog_directory  = 'hakadori-image'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/hakadori-image'
end
