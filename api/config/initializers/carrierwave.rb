require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'
unless Rails.env.development? || Rails.env.test?
  CarrierWave.configure do |config|
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],
      aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
      region: 'ap-northeast-1'
    }
    config.fog_directory  = 'hakadori-image'
  end
end

CarrierWave.configure do |config|
  config.asset_host = "http://localhost:3000"
  config.storage = :file
  config.cache_storage = :file
end

CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
