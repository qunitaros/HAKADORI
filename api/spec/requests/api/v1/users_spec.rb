require 'rails_helper'

RSpec.describe "API::V1::Users", type: :request do
  describe "GET /api/v1/users" do
    subject { get("/api/v1/users", headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    context "userが存在するとき" do
      before do
        create_list(:user, 5)
      end

      it "user一覧を取得できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["users"].length).to eq(5)
      end
    end

    context "userが存在しないとき" do
      it "空のオブジェクトが返される" do
        subject
        expect(res["users"]).to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "GET /api/v1/users/:id" do
    subject { get("/api/v1/users/#{@user.id}", headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    context "userが存在するとき" do
      before do 
        @user = create(:user)
        create_list(:post, 5, user: @user)
      end
      
      it "user情報を取得できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["user"]).to be_present
        expect(res["user"]["name"]).to be_present
        expect(res["user"]["email"]).to be_present
        expect(res["user"]["gender"]).to be_present
        expect(res["user"]["prefecture"]).to be_present
        expect(res["user"]["birthday"]).to be_present
        expect(res["user"]["field"]).to be_present
        expect(res["user"]["day_off"]).to be_present
        expect(res["user"]["profile"]).to be_present
        expect(res["posts"].length).to eq(5)
      end
    end
  end

  describe "PUT /api/v1/users" do
    subject { put("/api/v1/users/#{@user.id}", params: @params, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    let(:other_user) { create(:user) }
    context "パラメータが正しいとき" do
      before do 
        @user = current_user
        sign_in(current_user)
        @params = attributes_for(:user, field: 4, name: "hogehoge", profile: "hogehogehoge", prefecture: 3, day_off: 1) 
      end

      it "user情報を更新できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["status"]).to eq(200)
        expect(res["user"]["name"]).to eq("hogehoge")
        expect(res["user"]["field"]).to eq(4)
        expect(res["user"]["profile"]).to eq("hogehogehoge")
        expect(res["user"]["prefecture"]).to eq(3)
        expect(res["user"]["day_off"]).to eq(1)
      end
    end

    context "パラメータが正しくないとき" do
      before do 
        @user = current_user
        sign_in(current_user)
        @params = attributes_for(:user, field: 4, name: "hogehoge", profile: "hogehogehoge", prefecture: 3, day_off: 1) 
      end

      it "emailは変更できないこと" do
        @params = attributes_for(:user, email: "hogehogehoge@example.com") 
        subject
        expect(res["status"]).to eq(200)
        expect(res["user"]["email"]).to_not eq("hogehogehoge@example.com") 
      end

      it "idは変更できないこと" do
        @params = attributes_for(:user, id: current_user.id + 1) 
        subject
        expect(res["status"]).to eq(200)
        expect(res["user"]["id"]).to_not eq(current_user.id + 1) 
      end

      it "birthdayは変更できないこと" do
        @params = attributes_for(:user, birthday:"1998/03/03") 
        subject
        expect(res["status"]).to eq(200)
        expect(res["user"]["birthday"]).to_not eq("1998/03/03") 
      end
    end
  end
end
