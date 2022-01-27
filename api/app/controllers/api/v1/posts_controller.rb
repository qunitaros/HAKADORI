class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    posts = Post.all
    render json: { status: 200, data: posts }
  end

  def show
    @user = @post.user
    json_data = {
      'post': @post,
      'user': {
        'name': @user.name,
        'image': @user.image
      }
    }
    render json: { status: 200, data: json_data }
  end

  def create
    post = Post.new(params)
    if post.save
      render json: { status: 200, data: post }
    else
      render json: { status: 500, data: post.errors }
    end
  end

  def destroy 
    @post.destroy
    render json: { status: 200, data: @post }
  end

  def update
  end

  private
    
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:content, :post_field, :user_id)
    end
end
