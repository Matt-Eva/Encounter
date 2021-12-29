class CreateCampaignPlayerNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :campaign_player_notes do |t|
      t.string :notes
      t.belongs_to :player, null: false, foreign_key: true
      t.belongs_to :campaign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
