CarrierWave.configure do |config|
  config.asset_host = "http://localhost:3003"
  config.storage = :file
  config.cache_storage = :file
end
