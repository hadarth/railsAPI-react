class User < ApplicationRecord
  has_secure_password

  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }

  has_many :managers
  has_many :managed_events, :source => 'event', through: :managers

  has_many :promoters
  has_many :promoting_events, :source => 'event', through: :promoters
  # has_many :events, through: :managers
end