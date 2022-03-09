require 'rails_helper'

RSpec.describe "API::V1::Messages", type: :request do
  describe "POST /api/v1/messages" do
    subject { post("/api/v1/messages", params: @params, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    let(:chat_room) { create(:chat_room) }
    context "パラメータが正しいとき" do
      before do
        sign_in(current_user)
        @params = { chat_room_id: chat_room.id, user_id: current_user.id, content: "hogehoge" }
      end
      
      it "messageを投稿できること" do
        expect { subject }.to change(Message, :count).by(+1)
        expect(response.status).to eq(200)
      end
    end

    context "contentが存在しないとき" do
      before do
        sign_in(current_user)
        @params = { chat_room_id: chat_room.id, user_id: current_user.id, content: "" }
      end

      it "messageが投稿できないこと" do
        expect { subject }.to change(Message, :count).by(0)
        expect(res["status"]).to eq(500)
        expect(res["message"]).to eq("作成に失敗しました。")
      end
    end

    context "user_idが存在しないとき" do
      before do
        sign_in(current_user)
        @params = { chat_room_id: chat_room.id, user_id: nil, content: "hogehoge" }
      end

      it "messageが投稿できないこと" do
        expect { subject }.to change(Message, :count).by(0)
        expect(res["status"]).to eq(500)
        expect(res["message"]).to eq("作成に失敗しました。")
      end
    end

    context "chat_room_idが存在しないとき" do
      before do
        sign_in(current_user)
        @params = { chat_room_id: nil, user_id: current_user.id, content: "hogehoge" }
      end

      it "messageが投稿できないこと" do
        expect { subject }.to change(Message, :count).by(0)
        expect(res["message"]).to eq("作成に失敗しました。")
      end
    end
  end
end
