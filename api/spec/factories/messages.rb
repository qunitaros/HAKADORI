FactoryBot.define do
  factory :message do
    content { "sample" }
    association :user
    association :chat_room
  end
end
