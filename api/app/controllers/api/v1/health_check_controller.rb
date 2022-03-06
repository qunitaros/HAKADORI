class Api::V1::HealthCheckController < ApplicationController
  def index 
    head 200
    render :json { status: 200, message: "アクセス成功" }
  end
end
