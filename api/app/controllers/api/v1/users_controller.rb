class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update]

  def index
    users = User.where.not(id: current_api_v1_user.id).order("created_at DESC")
    render json: { status: 200, users: users }
  end

  def show 
    posts = @user.posts.all.order("created_at DESC")
    render json: { status: 200, user: @user, posts: posts }
  end

  def update
    @user.name = user_params[:name]
    @user.prefecture = user_params[:prefecture]
    @user.profile = user_params[:profile]
    @user.image = user_params[:image] if user_params[:image] != ""
    @user.field = user_params[:field]
    @user.day_off = user_params[:day_off]

    if @user.save
      render json: { status: 200, user: @user }
    else
      render json: { status: 500, message: "更新に失敗しました" }
    end
  end


  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:name, :prefecture, :profile, :image, :field, :day_off)
    end
end

