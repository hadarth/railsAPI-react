class Api::PromotersController < ApplicationController
  before_action :set_promoter, only: %i(show)
  before_action :authenticate_user, only: %i(show), if: :promoter_access

  def index
    evnt_id = JSON.parse(params[:filter]).symbolize_keys[:event_id]
    render json: Event.find_by_id(evnt_id).promoters_list
  end

  def show
    render json: @promoter.as_json(only: %i(id user_id, event_id ))
  end

  private

  def set_promoter
    @promoter = Promoter.find(params[:id])
  end

  def promoter_access
    !@promoter.allow_unauth
  end
end