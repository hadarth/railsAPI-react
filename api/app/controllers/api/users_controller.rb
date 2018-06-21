class Api::UsersController < ApplicationController
  before_action :authenticate_user

  def index
    render json: User.select(:id, :first_name, :last_name, :official_id, :age, :ticket_token, :role, :phone, :fb_profile_url, :email, :password_digest)
  end

  def show
    render json: @user.as_json(only: %i(first_name last_name official_id age ticket_token role phone fb_profile_url email password_digest))
  end

  def current
    # binding.pry
    render json: current_user.as_json(only: %i(id email))
  end

  def post_access
  !@user.allow_unauth
  end

end

