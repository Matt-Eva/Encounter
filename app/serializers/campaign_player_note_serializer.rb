class CampaignPlayerNoteSerializer < ActiveModel::Serializer
  attributes :id, :notes
  has_one :player
  has_one :campaign
end
