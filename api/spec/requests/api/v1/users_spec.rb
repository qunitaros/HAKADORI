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
    context "情報が正しいとき" do

    end

    context "idが存在しないとき" do

    end
  end
end
