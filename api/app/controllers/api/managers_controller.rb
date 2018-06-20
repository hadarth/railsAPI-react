class Api::ManagersController < ApplicationController
  before_action :set_manager, only: %i(show)
  before_action :authenticate_user, only: %i(show), if: :manager_access

  def index
    render json: Manager.select(:id, :user_id, :event_id)
  end

  def show
    render json: @manager.as_json(only: %i(id user_id, event_id ))
  end

  private

  def set_manager
    @manager = Manager.find(params[:id])
  end

  def manager_access
    !@manager.allow_unauth
  end
end