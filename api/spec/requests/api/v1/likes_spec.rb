require 'rails_helper'

RSpec.describe "API::V1::Likes", type: :request do

  describe "GET /api/v1/likes" do
    subject { get(api_v1_likes_path, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    let(:other_user) { create(:user, email: "hogehoge@example.com") }
    context "likesが存在するとき" do
      before do
        create_list(:like, 5, to_user: current_user)
        create_list(:like, 1, to_user: other_user, from_user: current_user)
      end

      it "like一覧を取得できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["active_likes"].length).to eq(1)
        expect(res["passive_likes"].length).to eq (5)
      end
    end

    context "likeが存在しないとき" do
      it "空のオブジェクトが返される" do
        subject
        expect(res["active_likes"]).to be_empty
        expect(res["passive_likes"]).to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "POST /api/v1/likes" do
    context "contentが存在するとき" do

    end

    context "contentが空のとき" do

    end
  end
end
