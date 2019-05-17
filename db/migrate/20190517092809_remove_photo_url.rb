class RemovePhotoUrl < ActiveRecord::Migration[5.2]
  def change
    rename_column :cocktails, :photourl, :photo
  end
end
