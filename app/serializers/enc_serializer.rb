class EncSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :notes, :status
  has_one :campaign
end
