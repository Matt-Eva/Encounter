class CampaignPlayerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :campaign
  has_one :player
end
