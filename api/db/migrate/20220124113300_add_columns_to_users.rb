class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :gender, :integer, null: false, default: 0, after: :nickname
    add_column :users, :birthday, :date, after: :email
    add_column :users, :profile, :string, limit: 1000, after: :birthday
    add_column :users, :prefecture, :integer, null: false, default: 1, after: :profile
    add_column :users, :field, :integer, null: false, default: 1, after: :prefecture
    add_column :users, :day_off, :integer, null: false, default: 1, after: :field

    remove_column :users, :nickname, :string
  end
end
