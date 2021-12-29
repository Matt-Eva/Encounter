class PlayerNote < ApplicationRecord
  belongs_to :player
  belongs_to :enc
end
