class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :title, null: false
      t.text :url, null: false
      t.integer :user_id, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
