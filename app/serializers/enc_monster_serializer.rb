class EncMonsterSerializer < ActiveModel::Serializer
  attributes :id
  has_one :monster
  has_one :enc
end
