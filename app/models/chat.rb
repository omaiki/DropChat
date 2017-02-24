class Chat < ApplicationRecord

  belongs_to :user
  has_many :messages

  validates :location, presence: true
  validates :location, uniqueness: true
  validates :title, presence: true
  validates :user, presence: true

end
