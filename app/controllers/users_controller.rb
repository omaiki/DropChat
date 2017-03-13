
  class UsersController < ApplicationController
    # skip_before_action :authenticate_user_from_token!, only: [:create]

    # POST /v1/users
    # Creates an user

    def index
      users = User.all
      render json: { users: users}
    end

    def create
      @user = User.new user_params

      if @user.save
        render json: @user, serializer: V1::SessionSerializer, root: nil
      else
        render json: { error: ('user_create_error') }, status: :unprocessable_entity
      end
    end

    def show
      user = User.find(params[:id])
      messages = user.messages
      chats = user.chats
      render json: { user: user, messages: messages, chats: chats}, status: 200
    end

    def update
      user = User.find(params[:id])
      if user.update_attributes(user_params)
        render json: { user: user, text: "Profile has been updated successfully"}, status: 200
      else
        render json: { error: user.errors.full_messages }, status: 422
      end
    end

    def edit
      user = User.find(params[:id])
      render json: user, only: [:username, :first_name, :last_name, :info], status: 200
    end

    def destroy
      user = User.find(params[:id])
      if user.destroy
        render json: {text: 'Account has been deleted successfully'}, status: 200
      else
        render json: {error: "Something went wrong, account failed to delete"}, status: 422
    end

    private

    def user_params
      params.require(:user).permit(:email, :username, :password, :first_name, :last_name, :info )
    end



