class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :title, null: false
      t.text :url, null: false
      t.integer :user_id, null: false
      t.text :description
      t.integer :link_list_id, null: false

      t.timestamps null: false
    end
    add_index :links, :link_list_id
  end
end
