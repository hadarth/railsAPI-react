class Api::EventsController < ApplicationController
  before_action :set_event, only: %i(show, update)
  # before_action :authenticate_user, only: %i(show), if: :event_access
  before_action :authenticate_user

  def index
    # binding.pry
    # byebug
    render json: current_user.managed_events
    # render json: Event.select(:id, :title, :url, :event_type, :state, :city, :street, :street_num, :start_date_time, :end_date_time, :age_limit, :privacy, :croud_selection, :body_heb, :body_eng, :allow_unauth, :owner_id, :event_password)
  end

  def show
    # byebug
    # render json: @event.as_json(only: %i(id, title url event_type state city street street_num start_date_time end_date_time age_limit privacy croud_selection body_heb body_eng allow_unauth owner_id event_password))
    render json: Event.find_by_id(params[:id])
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors, status: :bad_request
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :bad_request
    end
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_access
    !@event.allow_unauth
  end

  def event_params
      params.require(:event).permit(:title, :url, :event_type, :state, :city, :street, :street_num, :start_date_time, :end_date_time, :age_limit, :privacy, :croud_selection, :body_heb, :body_eng, :allow_unauth, :owner_id, :event_password)
    end
end