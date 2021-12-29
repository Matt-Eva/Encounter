class Player < ApplicationRecord
  belongs_to :user
  has_many :enc_player_notes
  has_many :encs, through: :enc_player_notes
  has_many :campaign_players
  has_many :campaigns, through: :campaign_players
  has_many :campaign_player_notes
  has_many :campaign_notes, through: :campaign_player_notes, source: :campaign
end
