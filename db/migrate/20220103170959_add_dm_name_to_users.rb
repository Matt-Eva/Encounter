class AddDmNameToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :dm_name, :string
  end
end
