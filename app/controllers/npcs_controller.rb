class NpcsController < ApplicationController

    def newencnpc
        npc = current_user.npcs.create!(npc_params)
        enc_npc = EncNpc.create!(npc_id: npc.id, enc_id: params[:enc_id])
        render json: npc, status: :created
    end

    private

    def npc_params
        params.permit(:name, :description, :image)
    end
end
