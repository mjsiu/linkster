class CreateLinkListItems < ActiveRecord::Migration
  def change
    create_table :link_list_items do |t|
      t.integer :link_list_id, null: false
      t.integer :link_id, null: false

      t.timestamps null: false
    end
    add_index :link_list_items, :link_list_id
  end
end
