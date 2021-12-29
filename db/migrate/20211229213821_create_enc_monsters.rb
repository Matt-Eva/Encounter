class CreateEncMonsters < ActiveRecord::Migration[7.0]
  def change
    create_table :enc_monsters do |t|
      t.belongs_to :monster, null: false, foreign_key: true
      t.belongs_to :enc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
