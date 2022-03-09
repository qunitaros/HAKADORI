require 'rails_helper'

RSpec.describe "API::V1::chat_rooms", type: :request do

  describe "GET /api/v1/chat_rooms" do
    subject { get(api_v1_chat_rooms_path, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    context "chat_roomが存在するとき" do
      before do
        create_list(:chat_room, 5)
      end

      it "chat_room一覧を取得できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["chat_room"].length).to eq(5)
      end
    end

    context "chat_roomが存在しないとき" do
      it "空のオブジェクトが返される" do
        subject
        expect(res["chat_room"]).to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end
end
