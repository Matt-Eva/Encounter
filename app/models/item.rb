class Item < ApplicationRecord
  belongs_to :user
  has_many :enc_items
  has_many :encs, through: :enc_items
end
