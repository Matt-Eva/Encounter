class ItemsController < ApplicationController

    def newencitem
        item = current_user.items.create!(item_params)
        enc_item = EncItem.create!(enc_id: params[:enc_id], item_id: item.id)
        render json: item, status: :created
    end

    private

    def item_params
        params.permit(:name, :description, :image)
    end

end
