class Event < ApplicationRecord
  validates :title, :body_eng, presence: true
  # validates :title, uniqueness: true

  has_many :managers
  has_many :managers_list, :source => 'user', through: :managers

  has_many :promoters
  has_many :promoters_list, :source => 'user', through: :promoters

end