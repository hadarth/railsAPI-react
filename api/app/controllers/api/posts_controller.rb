class Api::PostsController < ApplicationController
  before_action :set_post, only: %i(show)
  before_action :authenticate_user, only: %i(show), if: :post_access

  def index
    render json: Post.select(:id, :title, :body, :allow_unauth)
  end

  def show
    render json: @post.as_json(only: %i(id title body allow_unauth))
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_access
    !@post.allow_unauth
  end
end