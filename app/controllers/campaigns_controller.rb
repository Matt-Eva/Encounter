class CampaignsController < ApplicationController

    def show
        campaign = Campaign.find(params[:id])
        render json: campaign
    end

end
