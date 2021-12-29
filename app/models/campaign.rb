class Campaign < ApplicationRecord
  belongs_to :user
  has_many :encs
  has_many :campaign_players
  has_many :players, through: :campaign_players
  has_many :campaign_player_notes
  has_many :player_notes, through: :campaign_player_notes, source: :player
end
