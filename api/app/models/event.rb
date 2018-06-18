class Event < ApplicationRecord
  validates :title, :body_eng, presence: true
  # validates :title, uniqueness: true
end