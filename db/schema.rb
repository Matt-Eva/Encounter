# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_03_170959) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaign_player_notes", force: :cascade do |t|
    t.string "notes"
    t.bigint "player_id", null: false
    t.bigint "campaign_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["campaign_id"], name: "index_campaign_player_notes_on_campaign_id"
    t.index ["player_id"], name: "index_campaign_player_notes_on_player_id"
  end

  create_table "campaign_players", force: :cascade do |t|
    t.bigint "campaign_id", null: false
    t.bigint "player_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["campaign_id"], name: "index_campaign_players_on_campaign_id"
    t.index ["player_id"], name: "index_campaign_players_on_player_id"
  end

  create_table "campaigns", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.string "status"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_campaigns_on_user_id"
  end

  create_table "enc_items", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.bigint "enc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enc_id"], name: "index_enc_items_on_enc_id"
    t.index ["item_id"], name: "index_enc_items_on_item_id"
  end

  create_table "enc_locations", force: :cascade do |t|
    t.bigint "location_id", null: false
    t.bigint "enc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enc_id"], name: "index_enc_locations_on_enc_id"
    t.index ["location_id"], name: "index_enc_locations_on_location_id"
  end

  create_table "enc_monsters", force: :cascade do |t|
    t.bigint "monster_id", null: false
    t.bigint "enc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enc_id"], name: "index_enc_monsters_on_enc_id"
    t.index ["monster_id"], name: "index_enc_monsters_on_monster_id"
  end

  create_table "enc_npcs", force: :cascade do |t|
    t.bigint "npc_id", null: false
    t.bigint "enc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enc_id"], name: "index_enc_npcs_on_enc_id"
    t.index ["npc_id"], name: "index_enc_npcs_on_npc_id"
  end

  create_table "enc_player_notes", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "enc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "notes"
    t.index ["enc_id"], name: "index_enc_player_notes_on_enc_id"
    t.index ["player_id"], name: "index_enc_player_notes_on_player_id"
  end

  create_table "encs", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.string "notes"
    t.string "status"
    t.bigint "campaign_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["campaign_id"], name: "index_encs_on_campaign_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_locations_on_user_id"
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_monsters_on_user_id"
  end

  create_table "npcs", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_npcs_on_user_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_players_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.string "dm_name"
  end

  add_foreign_key "campaign_player_notes", "campaigns"
  add_foreign_key "campaign_player_notes", "players"
  add_foreign_key "campaign_players", "campaigns"
  add_foreign_key "campaign_players", "players"
  add_foreign_key "campaigns", "users"
  add_foreign_key "enc_items", "encs"
  add_foreign_key "enc_items", "items"
  add_foreign_key "enc_locations", "encs"
  add_foreign_key "enc_locations", "locations"
  add_foreign_key "enc_monsters", "encs"
  add_foreign_key "enc_monsters", "monsters"
  add_foreign_key "enc_npcs", "encs"
  add_foreign_key "enc_npcs", "npcs"
  add_foreign_key "enc_player_notes", "encs"
  add_foreign_key "enc_player_notes", "players"
  add_foreign_key "encs", "campaigns"
  add_foreign_key "items", "users"
  add_foreign_key "locations", "users"
  add_foreign_key "monsters", "users"
  add_foreign_key "npcs", "users"
  add_foreign_key "players", "users"
end
