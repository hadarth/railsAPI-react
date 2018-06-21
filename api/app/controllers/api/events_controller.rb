class Api::EventsController < ApplicationController
  before_action :set_event, only: %i(show)
  before_action :authenticate_user, only: %i(show), if: :event_access

  def index
    render json: Event.select(:id, :title, :url, :event_type, :state, :city, :street, :street_num, :start_date_time, :end_date_time, :age_limit, :privacy, :croud_selection, :body_heb, :body_eng, :allow_unauth, :owner_id, :event_password)
  end

  def show
    render json: @event.as_json(only: %i(id, title url event_type state city street street_num start_date_time end_date_time age_limit privacy croud_selection body_heb body_eng allow_unauth owner_id event_password))
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_access
    !@event.allow_unauth
  end
end