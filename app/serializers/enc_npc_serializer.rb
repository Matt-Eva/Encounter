class EncNpcSerializer < ActiveModel::Serializer
  attributes :id
  has_one :npc
  has_one :enc
end
