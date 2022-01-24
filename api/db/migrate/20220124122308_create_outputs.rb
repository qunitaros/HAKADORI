class CreateOutputs < ActiveRecord::Migration[6.1]
  def change
    create_table :outputs do |t|
      t.string :title, null: false
      t.integer :field, null: false
      t.string :content, null: false


      t.timestamps
    end
  end
end
