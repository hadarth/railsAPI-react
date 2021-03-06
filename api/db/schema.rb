# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_20_115059) do

  create_table "events", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.string "event_type"
    t.string "state"
    t.string "city"
    t.string "street"
    t.string "street_num"
    t.time "start_date_time"
    t.time "end_date_time"
    t.string "age_limit"
    t.boolean "privacy"
    t.boolean "croud_selection"
    t.text "body_heb"
    t.text "body_eng"
    t.boolean "allow_unauth"
    t.integer "owner_id"
    t.string "event_password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "managers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "event_id"
    t.index ["event_id"], name: "index_managers_on_event_id"
    t.index ["user_id"], name: "index_managers_on_user_id"
  end

  create_table "pages", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.boolean "allow_unauth"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_pages_on_title", unique: true
  end

  create_table "posts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.boolean "allow_unauth"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_posts_on_title", unique: true
  end

  create_table "promoters", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "users_id"
    t.bigint "events_id"
    t.bigint "created_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["events_id"], name: "index_promoters_on_events_id"
    t.index ["users_id"], name: "index_promoters_on_users_id"
  end

  create_table "tickets", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "official_id"
    t.string "age"
    t.string "ticket_token"
    t.string "role"
    t.string "phone"
    t.string "fb_profile_url"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "managers", "events"
  add_foreign_key "managers", "users"
  add_foreign_key "promoters", "events", column: "events_id"
  add_foreign_key "promoters", "users", column: "users_id"
end
