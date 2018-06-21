class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.boolean :allow_unauth

      t.timestamps
    end

    add_index :posts, %i(title), unique: true
  end
end
