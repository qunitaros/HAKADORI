class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:update, :destroy]

  def index
    posts = Post.all
    hash = []
    posts.each{|post|
      hash.push({post: post, user: post.user})
    }
    render json: { status: 200, posts: hash }
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: { status: 200, post: post }
    else
      render json: { status: 500, message: "作成に失敗しました。" }
    end
  end

  def destroy 
    @post.destroy
    render json: { status: 200, post: @post }
  end

  def update
  end

  private
    
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.permit(:content, :post_field, :user_id)
    end
end
