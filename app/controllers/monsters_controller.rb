class MonstersController < ApplicationController

    def newencmonster
        monster = current_user.monsters.create!(monster_params)
        enc_monster = EncMonster.create!(enc_id: params[:enc_id], monster_id: monster.id)
        render json: monster, status: :created
    end

    private

    def monster_params
        params.permit(:name, :description, :image)
    end

end
