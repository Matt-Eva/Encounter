class Enc < ApplicationRecord
  belongs_to :campaign
  has_many :enc_items, dependent: :destroy
  has_many :items, through: :enc_items
  has_many :enc_player_notes, dependent: :destroy
  has_many :players, through: :enc_player_notes
  has_many :enc_npcs, dependent: :destroy
  has_many :npcs, through: :enc_npcs
  has_many :enc_monsters, dependent: :destroy
  has_many :monsters, through: :enc_monsters
  has_one :enc_location, dependent: :destroy
  has_one :location, through: :enc_location
end