class CampaignPlayer < ApplicationRecord
  belongs_to :campaign
  belongs_to :player
end
