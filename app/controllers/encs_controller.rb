class EncsController < ApplicationController

    def show
        encounter = Enc.find(params[:id])
        render json: encounter, status: :ok
    end

    def campaignencs
        encounters = Enc.where(campaign_id: params[:id])
        render json: encounters, status: :ok
    end

    def create
        encounter = Enc.create!(encounter_params)
        render json: encounter, status: :created
    end

    def update
        encounter = Enc.find(params[:id])
        encounter.update(encounter_params)
        render json: encounter, status: :accepted
    end

    def destroy
        encounter = Enc.find(params[:id])
        encounter.destroy
        head :no_content
    end

    private

    def encounter_params
        params.permit(:campaign_id, :notes, :description, :name, :status, :image)
    end

end
