FactoryBot.define do
  factory :post do
    content { "test!" }
    post_field { Random.rand(1..10) }
    association :user
  end
end
