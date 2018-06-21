class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.string :url
      t.string :event_type
      t.string :state
      t.string :city
      t.string :street
      t.string :street_num
      t.time :start_date_time
      t.time :end_date_time
      t.string :age_limit
      t.boolean :privacy
      t.boolean :croud_selection
      t.text :body_heb
      t.text :body_eng
      t.boolean :allow_unauth
      t.integer :owner_id
      t.string :event_password
      t.timestamps
    end
  end
end


# all table methods
  # t.column # adds an ordinary column. Ex: t.column(:name, :string)
  # t.index # adds a new index.
  # t.timestamps
  # t.change # changes the column definition. Ex: t.change(:name, :string, :limit => 80)
  # t.change_default # changes the column default value.
  # t.rename # changes the name of the column.
  # t.references
  # t.belongs_to
  # t.string
  # t.text
  # t.integer
  # t.float
  # t.decimal
  # t.datetime
  # t.timestamp
  # t.time
  # t.date
  # t.binary
  # t.boolean
  # t.remove
  # t.remove_references
  # t.remove_belongs_to
  # t.remove_index
  # t.remove_timestamps


# all change methods
  # add_column
  # add_foreign_key
  # add_index
  # add_reference
  # add_timestamps
  # change_column_default (must supply a :from and :to option)
  # change_column_null
  # create_join_table
  # create_table
  # disable_extension
  # drop_join_table
  # drop_table (must supply a block)
  # enable_extension
  # remove_column (must supply a type)
  # remove_foreign_key (must supply a second table)
  # remove_index
  # remove_reference
  # remove_timestamps
  # rename_column
  # rename_index
  # rename_table