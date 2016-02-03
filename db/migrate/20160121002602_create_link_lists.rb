class CreateLinkLists < ActiveRecord::Migration
  def change
    create_table :link_lists do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
