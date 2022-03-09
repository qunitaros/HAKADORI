require 'rails_helper'

RSpec.describe "API::V1::ChatRooms", type: :request do

  describe "GET /api/v1/chat_rooms" do
    subject { get("/api/v1/chat_rooms", headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }

    context "chat_roomが存在するとき" do
      before do
        sign_in(current_user)

        @chat_room_a = create(:chat_room)
        @chat_room_b = create(:chat_room)
        create(:chat_room_user, user_id: current_user.id, chat_room_id: @chat_room_a.id)
        create(:chat_room_user, user_id: current_user.id, chat_room_id: @chat_room_b.id)
      end

      it "chat_room一覧を取得できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["chat_rooms"].length).to eq(2)
      end
    end

    context "chat_roomが存在しないとき" do
      it "空のオブジェクトが返されること" do
        subject
        expect(res["chat_rooms"]).to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "GET /api/v1/chat_rooms/:id" do
    subject { get("/api/v1/chat_rooms/#{@chat_room.id}", headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    
    context "chat_roomが存在するとき" do
      before do
        @other_user = create(:user)
        sign_in(current_user)
        @chat_room = create(:chat_room)
        create(:chat_room_user, user_id: current_user.id, chat_room: @chat_room)
        create(:chat_room_user, user_id: @other_user.id, chat_room: @chat_room)
        create(:message, user_id: current_user.id, chat_room_id: @chat_room.id, content: "hogehoge")
        create(:message, user_id: @other_user.id, chat_room_id: @chat_room.id, content: "fugafuga")
      end

      it "chat_room情報を取得できること" do
        subject
        expect(res["status"]).to eq(200)
        expect(res["other_user"]["id"]).to eq(@other_user.id)
        expect(res["messages"][0]["content"]).to eq("hogehoge")
        expect(res["messages"][1]["content"]).to eq("fugafuga")
      end
    end 
  end
end
