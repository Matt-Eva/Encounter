class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :status
  has_one :user
end
