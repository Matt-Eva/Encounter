class AddNotesColumnToEncPlayerNotes < ActiveRecord::Migration[7.0]
  def change
    add_column :enc_player_notes, :notes, :string
  end
end
