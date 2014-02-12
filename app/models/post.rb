class Post < ActiveRecord::Base
  validates :title, :content, presence: true, length: {minimum: 5}
end
