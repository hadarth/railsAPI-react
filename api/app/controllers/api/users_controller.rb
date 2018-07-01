class Api::UsersController < ApplicationController
  before_action :authenticate_user
  skip_before_action :authenticate_user, only: [:create]

  def index
    render json: User.select(:id, :first_name, :last_name, :official_id, :age, :ticket_token, :role, :phone, :fb_profile_url, :email, :password_digest)
  end

  def show
    render json: @user.as_json(only: %i(first_name last_name official_id age ticket_token role phone fb_profile_url email password_digest))
  end

  def current
    render json: current_user.as_json(only: %i(id email))
  end

  def create
    @user = User.new(email: params[:email], password: params[:password])
    byebug
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: :bad_request
    end
  end

  def post_access
  !@user.allow_unauth
  end

  private

  def user_params
      params.require(:user).permit(:id, :first_name, :last_name, :official_id, :age, :ticket_token, :role, :phone, :fb_profile_url, :email, :password_digest)
  end
end

