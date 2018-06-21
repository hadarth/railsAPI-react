class AddUserRefToManagers < ActiveRecord::Migration[5.2]
  def change
    add_reference :managers, :user, foreign_key: true
  end
end
