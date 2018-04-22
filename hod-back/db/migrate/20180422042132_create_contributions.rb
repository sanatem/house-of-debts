class CreateContributions < ActiveRecord::Migration[5.2]
  def change
    create_table :contributions do |t|
      t.date :date
      t.references :user, foreign_key: true
      t.references :house, foreign_key: true
      t.float :amount
      t.string :reason
      t.timestamps
    end
  end
end
