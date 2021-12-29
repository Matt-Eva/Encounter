class EncPlayerNoteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :player
  has_one :enc
end
