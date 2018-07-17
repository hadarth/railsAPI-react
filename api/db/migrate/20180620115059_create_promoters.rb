class CreatePromoters < ActiveRecord::Migration[5.2]
  def change
    create_table :promoters do |t|
      t.references :user, index: true, foreign_key: { to_table: :users }
      t.references :event, index: true, foreign_key: { to_table: :events }
      t.bigint :created_by

      t.timestamps
    end
  end
end
