class CreateEncs < ActiveRecord::Migration[7.0]
  def change
    create_table :encs do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :notes
      t.string :status
      t.belongs_to :campaign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
