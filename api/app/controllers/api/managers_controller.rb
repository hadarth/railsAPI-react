class Api::ManagersController < ApplicationController
  # before_action :set_manager, only: %i(show)
  before_action :authenticate_user, only: %i(show), if: :manager_access

  def index
    evnt_id = JSON.parse(params[:filter]).symbolize_keys[:event_id]
    render json: Event.find_by_id(evnt_id).managers_list
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