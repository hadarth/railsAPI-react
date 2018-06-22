class Api::EventsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: current_user.managed_events
  end

  def show
    render json: Event.find_by_id(params[:id])
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_access
    !@event.allow_unauth
  end
end