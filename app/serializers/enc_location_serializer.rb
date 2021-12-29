class EncLocationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :location
  has_one :enc
end
