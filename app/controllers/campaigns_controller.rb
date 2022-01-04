class CampaignsController < ApplicationController

    def show
        campaign = Campaign.find(params[:id])
        render json: campaign
    end

    def index
        render json: current_user.campaigns, status: :ok
    end

    def create
        campaign = current_user.campaigns.create!(campaign_params)
        render json: campaign, status: :created
    end

    def destroy
        campaign = Campaign.find(params[:id])
        campaign.destroy
        head :no_content
    end

    private

    def campaign_params
        params.permit(:name, :description, :image, :status)
    end

end
