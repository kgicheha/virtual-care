class AddTotalReviewsToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :total_reviews, :integer
  end
end
