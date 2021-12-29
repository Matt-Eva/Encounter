class Location < ApplicationRecord
  belongs_to :user
  has_many :enc_locations
  has_many :encs, through: :enc_locations
end
