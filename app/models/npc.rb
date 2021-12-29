class Npc < ApplicationRecord
  belongs_to :user
  has_many :enc_npcs
  has_many :encs, through: :enc_npcs
end
