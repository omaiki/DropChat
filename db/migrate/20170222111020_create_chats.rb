class CreateChats < ActiveRecord::Migration[5.0]
  def change
    create_table :chats do |t|

      t.integer :location
      t.string :title
      t.references :user

      t.timestamps
    end
  end
end
