class Enc < ApplicationRecord
  belongs_to :campaign
  has_many :enc_items
  has_many :items, through: :enc_items
  has_many :enc_player_notes
  has_many :players, through: :enc_player_notes
  has_many :enc_npcs
  has_many :npcs, through: :enc_npcs
  has_many :enc_monsters
  has_many :monsters, through: :enc_monsters
  has_many :enc_locations
  has_many :locations, through: :enc_locations
end
