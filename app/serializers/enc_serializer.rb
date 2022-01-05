class EncSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :notes, :status
  has_one :campaign
  has_one :location
  has_many :npcs
end
