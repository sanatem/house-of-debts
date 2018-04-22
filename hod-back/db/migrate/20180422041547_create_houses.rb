class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.string :hash_tag
      t.timestamps
    end
  end
end
