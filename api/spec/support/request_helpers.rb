module Requests
  module JsonHelpers
    def res
      JSON.parse(response.body)
    end
  end
end
