class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :official_id
      t.string :age
      t.string :ticket_token
      t.string :role
      t.string :phone
      t.string :fb_profile_url
      t.string :email
      t.string :password_digest

      t.timestamps
    end
    add_index :users, %i(email), unique: true
  end
end
