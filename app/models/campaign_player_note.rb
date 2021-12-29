class CampaignPlayerNote < ApplicationRecord
  belongs_to :player
  belongs_to :campaign
end
