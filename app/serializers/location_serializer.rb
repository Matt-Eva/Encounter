class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
  has_one :user
end
