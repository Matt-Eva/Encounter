class User < ApplicationRecord
    #these are the relations that we'll certainly use.
    has_many :items
    has_many :players
    has_many :campaigns
    has_many :npcs
    has_many :monsters
    has_many :locations

    #these are the relations that we may use - I've added them just for scalability in case we need them.
    has_many :encs, through: :campaigns
    has_many :player_notes, through: :players

    #validations
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :dm_name, :password, presence: true

end
