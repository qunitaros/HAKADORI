class Message < ApplicationRecord
  belongs_to :chat_room
  belongs_to :user

  validates :user_id, presence: true
  validates :chat_room_id, presence: true
  validates :content, presence: true
end
