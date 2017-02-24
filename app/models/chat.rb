class Chat < ApplicationRecord

  has_many :users
  has_many :messages

  validates :location, presence: true
  validates :title, presence: true
  validates :user, presence: true

end
