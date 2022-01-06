class LocationsController < ApplicationController

    def newenclocation
        location = current_user.locations.create!(location_params)
        enc_location = EncLocation.create!(enc_id: params[:enc_id], location_id: location.id)
        render json: location, status: :created
    end

    private

    def location_params
        params.permit(:name, :description, :image)
    end

end
