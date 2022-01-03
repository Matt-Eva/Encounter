class Monster < ApplicationRecord
  belongs_to :user
  has_many :enc_monsters
  has_many :encs, through: :enc_monsters
end
