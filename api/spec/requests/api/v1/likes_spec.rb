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
      it "空のオブジェクトが返されること" do
        subject
        expect(res["active_likes"]).to be_empty
        expect(res["passive_likes"]).to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "POST /api/v1/likes" do
    subject { post("/api/v1/likes", params: @params, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    let(:other_user) { create(:user) }

    context "パラメータが正しいとき" do
      before do
        @params = { from_user_id: current_user.id, to_user_id: other_user.id }
      end

      it "likeを作成できること" do
        expect { subject }.to change(Like, :count).by(+1)
        expect(res["status"]).to eq(200)
        expect(res["like"]["from_user_id"]).to eq(current_user.id)
        expect(res["like"]["to_user_id"]).to eq(other_user.id)
        expect(res["is_matched"]).to eq(false)
      end
    end

    context "passive_likeが存在するとき" do
      before do
        @params = { from_user_id: current_user.id, to_user_id: other_user.id }
        create(:like, from_user_id: other_user.id, to_user_id: current_user.id)
      end

      it "マッチング状態がtrueになること" do
        subject
        expect(res["status"]).to eq(200)
        expect(res["is_matched"]).to eq(true)
      end

      it "chat_roomが作られること" do
        expect { subject }.to change(ChatRoom, :count).by(+1).and change(ChatRoomUser, :count).by(+2)
      end
    end
  end
end
