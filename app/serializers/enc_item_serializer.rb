class EncItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :enc
end
