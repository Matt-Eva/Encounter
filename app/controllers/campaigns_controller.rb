class CampaignsController < ApplicationController

    def index
        render json: current_user.campaigns, status: :ok
    end

    def create
        campaign = current_user.campaigns.create!(campaign_params)
        render json: campaign, status: :created
    end

    private

    def campaign_params
        params.permit(:name, :description, :image, :status)
    end

end
