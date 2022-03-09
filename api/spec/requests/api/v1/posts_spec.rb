require 'rails_helper'

RSpec.describe "API::V1::Posts", type: :request do
  describe "GET /api/v1/posts" do
    subject { get("/api/v1/posts", headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    context "postが存在するとき" do
      before do
        create_list(:post, 5, user: current_user)
      end

      it "post一覧を取得できること" do
        subject
        expect(response).to have_http_status(200)
        expect(res["posts"].length).to eq(5)
      end
    end

    context "postが存在しない場合" do
      it "空のオブジェクトが返される" do
        subject
        expect(res["posts"]).to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end


  describe "POST /api/v1/posts" do
    subject { post("/api/v1/posts", params: @params, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    context "パラメータが正しいとき" do
      before do
        sign_in(current_user)
        @params = { content: "hogehoge", post_field: 2, user_id: current_user.id }
      end
      
      it "postを投稿できること" do
        expect { subject }.to change(Post, :count).by(+1)
        expect(response.status).to eq(200)
      end
    end

    context "contentが存在しないとき" do
      before do
        sign_in(current_user)
        @params = { content: "", post_field: 3, user_id: current_user.id }
      end

      it "postが投稿できないこと" do
        expect { subject }.to change(Post, :count).by(0)
        expect(res["status"]).to eq(500)
        expect(res["message"]).to eq("作成に失敗しました。")
      end
    end

    context "user_idが存在しないとき" do
      before do
        sign_in(current_user)
        @params = { content: "hogehoge", post_field: 3, user_id: nil }
      end

      it "postが投稿できないこと" do
        expect { subject }.to change(Post, :count).by(0)
        expect(res["status"]).to eq(500)
        expect(res["message"]).to eq("作成に失敗しました。")
      end
    end

    context "post_fieldが存在しないとき" do
      before do
        sign_in(current_user)
        @params = { content: "hogehoge", post_field: nil, user_id: current_user.id }
      end

      it "postが投稿できないこと" do
        expect { subject }.to change(Post, :count).by(0)
        expect(res["status"]).to eq(500)
        expect(res["message"]).to eq("作成に失敗しました。")
      end
    end
  end

  describe "DELETE /api/v1/post/[:id]" do
    subject { delete("/api/v1/posts/#{@post.id}", params: @params, headers: headers) }

    let(:headers) { current_user.create_new_auth_token }
    let(:current_user) { create(:user) }
    let(:other_user) { create(:user) }
    context "投稿主がcurrent_userのとき" do
      before do
        sign_in(current_user)
        @post = create(:post, user_id: current_user.id)
      end
      it "自分のpostを削除できること" do
        expect { subject }.to change(Post, :count).by(-1)
        expect(res["status"]).to eq(200)
      end
    end

    context "投稿主がcurrent_userではないとき" do
      before do
        sign_in(current_user)
        @post = create(:post, user_id: other_user.id)
      end

      it "投稿を削除できないこと" do
        expect { subject }.to change(Post, :count).by(0)
        expect(res["status"]).to eq(500)
        expect(res["message"]).to eq("削除に失敗しました。")
      end
    end
  end
end

