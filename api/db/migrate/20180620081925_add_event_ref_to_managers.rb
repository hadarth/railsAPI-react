class AddEventRefToManagers < ActiveRecord::Migration[5.2]
  def change
    add_reference :managers, :event, foreign_key: true
  end
end
