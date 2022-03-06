class Api::V1::HealthCheckController < ApplicationController
  def index 
    render :json { status: 200, message: "アクセス成功", head 200 }
  end
end
