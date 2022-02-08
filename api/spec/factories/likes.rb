FactoryBot.define do
  factory :like do
    to_user_id { create(:user).id }
    from_user_id { create(:user).id }
  end
end
