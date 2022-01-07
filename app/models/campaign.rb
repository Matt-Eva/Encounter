class Campaign < ApplicationRecord
  belongs_to :user
  has_many :encs, dependent: :destroy
  has_many :campaign_players, dependent: :destroy
  has_many :players, through: :campaign_players
  has_many :campaign_player_notes, dependent: :destroy
  has_many :player_notes, through: :campaign_player_notes, source: :player
end
