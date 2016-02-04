class CreateLinkLists < ActiveRecord::Migration
  def change
    create_table :link_lists do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.string :link_image

      t.timestamps null: false
    end
  end
end
