class CreateEncNpcs < ActiveRecord::Migration[7.0]
  def change
    create_table :enc_npcs do |t|
      t.belongs_to :npc, null: false, foreign_key: true
      t.belongs_to :enc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
